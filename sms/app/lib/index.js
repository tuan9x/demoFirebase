import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "../config";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, "posts/" + postId + "/starCount");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

export default database;
