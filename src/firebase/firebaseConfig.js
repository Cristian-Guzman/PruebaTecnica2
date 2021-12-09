import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDudem46LxpxFr-E5uA6etVhjfFWhd6lrc",
    authDomain: "prueba-tecnica-dc031.firebaseapp.com",
    projectId: "prueba-tecnica-dc031",
    storageBucket: "prueba-tecnica-dc031.appspot.com",
    messagingSenderId: "976670969564",
    appId: "1:976670969564:web:20028ed2c85466fb8d2e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;