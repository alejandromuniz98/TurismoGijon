import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXryzj9wRK6FaHeslPz_t5m-lWBj4gdkc",
  authDomain: "turismoporgijon.firebaseapp.com",
  projectId: "turismoporgijon",
  storageBucket: "turismoporgijon.appspot.com", // CORREGIDO
  messagingSenderId: "136641651944",
  appId: "1:136641651944:web:476a4ae4d8d32212f8955d",
  measurementId: "G-XJDD6Z1L61"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
