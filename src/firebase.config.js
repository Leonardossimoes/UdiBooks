import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_iouiH6BRXQ3XdhC1xv0LHapDL3MWG6E",
    authDomain: "mkt-place-13e62.firebaseapp.com",
    databaseURL: "https://mkt-place-13e62-default-rtdb.firebaseio.com",
    projectId: "mkt-place-13e62",
    storageBucket: "mkt-place-13e62.appspot.com",
    messagingSenderId: "26696493502",
    appId: "1:26696493502:web:0513ca03e094017b7eb1ef",
    measurementId: "G-WFFK31K9PZ"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const storage = getStorage(app);

  export {app, db, storage};