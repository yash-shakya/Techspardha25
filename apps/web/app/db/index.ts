import { getFirestore } from "firebase/firestore";
import { getDatabase, set, ref, update, remove, get, child, push, query, orderByChild, equalTo } from "firebase/database";
import fireapp from "../lib/firebase";

// Get Firestore instance
const db = getFirestore(fireapp); // this is firestore, redundant now
const database = getDatabase(fireapp);
export { db, database, set, ref, update, remove, get, child, push, query, orderByChild, equalTo };
