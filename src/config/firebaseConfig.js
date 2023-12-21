import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCppAItyj-gogf1TnTBiwBQ3hbNz9ht6xM",
  authDomain: "planthaus-project.firebaseapp.com",
  projectId: "planthaus-project",
  storageBucket: "planthaus-project.appspot.com",
  messagingSenderId: "875988105004",
  appId: "1:875988105004:web:f36b9a5a580ec2be5b5e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);