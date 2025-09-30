// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBh2ppcrjwXaw6sN0gp6Me5Z0MjBx2GRQQ",
  authDomain: "codeknights-313d5.firebaseapp.com",
  projectId: "codeknights-313d5",
  storageBucket: "codeknights-313d5.appspot.com",
  messagingSenderId: "1031679311892",
  appId: "1:1031679311892:web:ac6242e30ebb00111b6701",
  measurementId: "G-E5V2PEYHHY"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const analytics = () => {
    if (typeof window !== "undefined") {
        return getAnalytics(app);
    } else {
        return null;
    }
}


export { app, analytics };
