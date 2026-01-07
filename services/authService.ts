import { createUserWithEmailAndPassword, updateProfile , } from "firebase/auth";
import { auth, db } from "./fireBaseConfig";
import { doc , setDoc } from "firebase/firestore";

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

export const loginUser = (email : string , password : string) => {}