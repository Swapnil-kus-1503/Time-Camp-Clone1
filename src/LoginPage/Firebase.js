// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOHrj-DGCambysSCFoiAsdImD_l4NX5uQ",
  authDomain: "timecamp-76e31.firebaseapp.com",
  projectId: "timecamp-76e31",
  storageBucket: "timecamp-76e31.appspot.com",
  messagingSenderId: "113306228211",
  appId: "1:113306228211:web:aa0e6dfa89e7c623a06e86",
  measurementId: "G-VL0BFXNZGD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
