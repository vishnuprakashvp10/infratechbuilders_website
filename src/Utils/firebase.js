// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, query, where, getDocs, deleteDoc, orderBy, updateDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC65dC7ZKi2qsaNzTcR6S3zcPDMKmLoE7M",
    authDomain: "infratechbuilders-database.firebaseapp.com",
    projectId: "infratechbuilders-database",
    storageBucket: "infratechbuilders-database.appspot.com",
    messagingSenderId: "61203815544",
    appId: "1:61203815544:web:61e64d1ce4f39af430a18d",
    measurementId: "G-BNQ05NEJYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();

//Create Document In Firestore
export const createContactFormFirebase = async (formData, submitted_from) => {
    const { email, message, name, phoneNumber, service } = formData;
    const time_created = new Date();
    try {
        const doc = await addDoc(collection(db, "contactForms"), {
            name, email, message, phoneNumber, service, time_created, submitted_from
        })
    } catch (error) {
        console.log(error);
    }
    return doc;
}