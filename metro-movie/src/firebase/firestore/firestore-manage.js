import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useUserContext } from "../../contexts/UserContext";

export async function updateUserFavs(id, movieid) {
  console.log(movieid);
  const ref = doc(db, "users", id);
  const result = await updateDoc(ref, {
    favorites: arrayUnion(movieid),
  });
}
