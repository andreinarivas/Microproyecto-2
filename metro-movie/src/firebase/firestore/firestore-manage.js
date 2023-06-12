import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  collection,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useUserContext } from "../../contexts/UserContext";

export async function updateUserFavs(id, movieid) {
  try {
    const ref = doc(db, "users", id);
    const result = await updateDoc(ref, {
      favorites: arrayUnion(movieid),
    });
  } catch (error) {}
}

export async function getReserved(movieid) {
  try {
    const ref = doc(db, "funciones", movieid);
    const docInfo = await getDoc(ref);
    if (docInfo.exists()) {
      const data = docInfo.data();
      return data;
    } else {
      const ref = collection(db, "funciones");
      await setDoc(doc(ref, movieid), { ocupadas: [] });
      const result = await getDoc(doc(db, "funciones", movieid));
      const data = result.data();
      return data;
    }
  } catch (error) {}
}

export async function updateReserved(movieid, info) {
  try {
    const ref = doc(db, "funciones", movieid);
    const result = await updateDoc(ref, {
      ocupadas: arrayUnion(...info.puestos),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createReserva(info) {
  try {
    console.log("info", info);
    const reserva = collection(db, "reservas");
    await setDoc(doc(reserva, info.cedula), info);
  } catch (error) {
    console.log(error);
  }
}
