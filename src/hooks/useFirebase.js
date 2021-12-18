import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword } from "firebase/auth";
import initializationAuthentication from "../Pages/Login/Firebase/firebase.init";

initializationAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    const auth = getAuth();
    const registerUser = (email, password, location, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            setAuthError('')
            const destination = location?.state?.from || '/home';
            history.push(destination);
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err.message);
            setAuthError(err.message)
        })
        .finally(()=>setIsLoading(false))
    }

    const logInUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          setAuthError('')
          const destination = location?.state?.from || '/'
          history.push(destination);
        })
        .catch((error) => {
         console.log(error.message);
         setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            console.log(error.message)
          })
          .finally(()=>setIsLoading(false));
    }

    //observer
    useEffect(()=>{
       const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false)
          });
          return ()=>unsubscribed;
    },[]);

    
    return{
        user,
        registerUser,
        isLoading,
        logOut,
        authError,
        logInUser

}

}
export default useFirebase;