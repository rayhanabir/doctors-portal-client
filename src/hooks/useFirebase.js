import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword,updateProfile ,signInWithPopup, onAuthStateChanged,GoogleAuthProvider,signOut,signInWithEmailAndPassword } from "firebase/auth";
import initializationAuthentication from "../Pages/Login/Firebase/firebase.init";

initializationAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name , history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
            setAuthError('')
            const newUser = {email, displayName:name}
            setUser(newUser)
            //save data to database
            saveUser(email, name)
           
            //send name to firebase

            updateProfile(auth.currentUser, {
              displayName:name
            }).then(() => {
            
            }).catch((error) => {
          
            })
            history.push('/');
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
        .then((userCredential) => {
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

    //google sign in

    const googleSignIn = (location, history) =>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            setAuthError('')
            saveGoogleLoginUser(user.email, user.displayName)
            const destination = location?.state?.from || '/'
            history.push(destination);
          }).catch((error) => {
            console.log(error);
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

    //function form new user to set db
    
    const saveUser = (email, displayName) =>{
          const user = {email:email, displayName:displayName}
          fetch('http://localhost:5000/users',{
            method:'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data=>console.log(data))
    }

    //function for user who login using google 

    const saveGoogleLoginUser = (email, displayName) =>{
          const user = {email:email, displayName:displayName}
          fetch('http://localhost:5000/users',{
            method:'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data=>console.log(data))
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
        logInUser,
        googleSignIn

}

}
export default useFirebase;