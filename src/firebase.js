import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCmcxSukvwTTsKPUaKzlVCriuo25alLAQI",
  authDomain: "aziz-2b313.firebaseapp.com",
  projectId: "aziz-2b313",
  storageBucket: "aziz-2b313.appspot.com",
  messagingSenderId: "589142465632",
  appId: "1:589142465632:web:76ad0327bd6ab1a2967705",
  measurementId: "G-FQMDBD8CBE"
};


// const firebaseConfig = {
//     apiKey: "AIzaSyDpfrn5EjHvprPq6Y14W4zeUzWVv9QtFls",
//     authDomain: "rheman-47529.firebaseapp.com",
//     projectId: "rheman-47529",
//     storageBucket: "rheman-47529.appspot.com",
//     messagingSenderId: "258533718170",
//     appId: "1:258533718170:web:74925f5aae3c8070098723",
//     measurementId: "G-QX3ZNPF6G6"
//   };

  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  export const db = getDatabase(app);
  export const auth = getAuth(app);
