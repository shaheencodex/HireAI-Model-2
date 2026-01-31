import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBa5jjMNG4mAUtBUkRAPS5hNYNn9VHwzBo",
  authDomain: "hireai-d38cc.firebaseapp.com",
  projectId: "hireai-d38cc",
  storageBucket: "hireai-d38cc.appspot.com",
  messagingSenderId: "933698240057",
  appId: "1:933698240057:web:c400f7657e7146b843d7e8",
  measurementId: "G-L672Q1YLMR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { analytics };
export default app;
