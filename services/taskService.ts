import { getAuth } from "firebase/auth"
import { addDoc, collection, orderBy, query, where , getDocs } from "firebase/firestore";
import { db } from "./fireBaseConfig";


const auth = getAuth();
const tasksCollection = collection(db , "tasks");

export const addTask = async (
    title:string , 
    description:string , 
    isCompleted:boolean = false , 
    
) => {
    const user = auth.currentUser;
    if(!user) {
        throw new Error("User not authenticated");
    }

    await addDoc(tasksCollection , {
        title,
        description, 
        isCompleted,
        userId : user.uid,
        createdAt : new Date().toString()   
    })
}

export const getAllTasks = async () => {
    const user = auth.currentUser;
    if(!user) {
        throw new Error("User not authenticated");
    }

    const q = query(tasksCollection , 
        where("userId" , "==" , user.uid),
        orderBy("createdAt" , "desc")
    );

    const snapshot = await getDocs(q);
    snapshot.docs.map((dataset) => {
        const data = dataset.data();
        return{
            id : dataset.id,
            title : data.title as string,
            description : data.description as string, 
            isCompleted : ( data.isCompleted as boolean ) || false,
            createdAt : data.createdAt as string 
        }
    })
}