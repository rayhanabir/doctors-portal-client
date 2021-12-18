import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializationAuthentication =() =>{
    initializeApp(firebaseConfig);
}
export default initializationAuthentication;