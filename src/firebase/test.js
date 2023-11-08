
async function addDataToFirestore() {

    // const data = {
    //   key1: "value1",
    //   key2: "value2",
    // }; // Replace with your JSON data

    try {
      const docRef = await addDoc(collection(db,"test"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }