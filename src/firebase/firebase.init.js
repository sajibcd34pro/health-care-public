import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firbeaseInitialization = () => {
    return initializeApp(firebaseConfig);
}


export default firbeaseInitialization;