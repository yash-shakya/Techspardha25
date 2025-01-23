import { getFirestore } from "firebase/firestore";
import fireapp from "../firebase.config";

// Get Firestore instance
const db = getFirestore(fireapp);

export { db };
