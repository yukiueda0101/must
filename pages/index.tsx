import { firebaseApp } from "@/libs/firebase/init";
import { Button } from "@mui/material";
import {
  addDoc,
  collection,
  Firestore,
  getFirestore,
} from "firebase/firestore";

const addDataToFirestore = async (db: Firestore) => {
  try {
    console.log("save data to firestore");
    const user = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("user:", user);
  } catch (e) {
    console.log(e);
  }
};

export default function Index() {
  const db = getFirestore(firebaseApp);

  return (
    <Button
      variant="contained"
      onClick={() => {
        addDataToFirestore(db);
      }}
    >
      Add data to firestore
    </Button>
  );
}
