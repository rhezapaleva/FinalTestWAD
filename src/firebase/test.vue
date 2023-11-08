<template>
<button @click="addDataToFirestore">Add Data to Firestore</button>
<hr>
<button @click="test()">Test</button>
</template>
<script>
import data from './data2.json'
import db from './firebaseconfig.js'
import { collection, addDoc } from "firebase/firestore"; 
const usersForProj = data.usersforProj

// Assuming 'usersforProj' is the name of your Firestore collection


export default{

    methods:{
       async test(){
            // console.log(data.usersforProj)
            const collectionRef = collection(db, "usersForProj")
            usersForProj.forEach((userData) => {
                try{
                    const docRef = addDoc(collectionRef,userData)
                    console.log("Document written with ID: ", docRef.id);
                }
                catch(error){
                    console.error("Error adding document: ", error);
                }
            })
  // Generate a unique document ID (Firestore will automatically assign one if you don't specify it)

}
}
}
  // Set the user data as the content of the document
          
        
//         async addDataToFirestore() {

// // const data = {
// //   key1: "value1",
// //   key2: "value2",
// // }; // Replace with your JSON data

// try {
//   const docRef = await addDoc(collection(db,"test"), data);
//   console.log("Document written with ID: ", docRef.id);
// } catch (error) {
//   console.error("Error adding document: ", error);
// }
// }
    

</script>