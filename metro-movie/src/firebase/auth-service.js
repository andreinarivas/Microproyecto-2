//Metodos de autenticacion
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAdditionalUserInfo } from "@firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async () => {
    try{

       const result = await signInWithPopup(auth, googleProvider);
       const {isNewUser} = getAdditionalUserInfo(result);

       if (isNewUser){
        await createUserProfile(result.user.uid,{
            email:result.user.email,
            name:result.user.displayName,
        });
       }

    }catch(error){

    }
};
export const registerWithEmailAndPassword = async (email,password, extraData) => {
    try{
        const result = await sigInWithEmailAndPassword(auth, email, password);
        await createUserProfile(result.user.uid, {
            email,
            ...extraData,
        });
    } catch (error){
        console.log(error);

    }
};
export const loginWithEmailAndPassword = async (email, password) => {
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.error(error)

    }
};
export const logout = async () => {
    try{
        await signOut(auth);
    }catch(error){

    }
};


