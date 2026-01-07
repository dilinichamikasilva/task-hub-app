import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile , } from "firebase/auth";
import { auth, db } from "./fireBaseConfig";
import { doc , setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";

export const registerUser = async (
    fullname : string , 
    email  : string ,
    password : string
) => {
    const userCredentials = await createUserWithEmailAndPassword(
        auth , 
        email , 
        password
    )

    await updateProfile(userCredentials.user , {
        displayName : fullname
    })
    
    await setDoc(doc(db , "users" , userCredentials.user.uid) , {
        name : fullname,
        role : "User",
        createAt : new Date()
    })
    return userCredentials.user;
};

export const loginUser = async(email : string , password : string) => {
   return await signInWithEmailAndPassword(auth , email , password);
}

export const logoutUser = async() => {
    await signOut(auth);
    AsyncStorage.clear();
    return
}