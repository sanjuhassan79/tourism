import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useState,useEffect } from "react";
import initialAuthnitcation from "../firebase/firebase.init";


initialAuthnitcation()
const useFirebase=()=>{




    const auth = getAuth();

    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const [isLoading,setisLoading]=useState(true)
const signInUsingGoogle=()=>{
    setisLoading(true)
    const GoogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleProvider)
    .catch((error) => {
       
       
        setError(error.email);
        
        
      })
      .finally(()=>setisLoading(false))


};
const logOut=()=>{
    setisLoading(true)
      signOut(auth).then(() => {
        setUser({})
        }).catch((error) => {
          // An error happened.
        })
        .finally(()=>setisLoading(false))

  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
            setUser(user);
          
        }
        setisLoading(false)
      });
}, [])
const handleEmailChange=e=>{
    setEmail(e.target.value)

}
const handlePasswordChange=e=>{
    setpassword(e.target.value)

}

const handleRegister=e=>{
e.preventDefault()
setisLoading(true)
       if(password.length<6){
        setError('Plassword Must be at least 6 characters long')
       }
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setUser(userCredential.user);
    // ...
  })
  .catch((error) => {
   
    setError(error.message);
    // ..
  })
   .finally(()=>setisLoading(false))

}




const signInWithEmailAndPass=(e)=>{
    e.preventDefault()
    setisLoading(true)
    signInWithEmailAndPassword(auth, email, password)
   
    .then((userCredential) => {
               
      setUser(userCredential.user);
      setError('')
    })
    .catch((error) => {
      
        setError(error.message);
      
    })
    .finally(()=>setisLoading(false))
    
  }
return {
    user,
    error,
    isLoading,
signInUsingGoogle,
handleEmailChange,
handlePasswordChange,
handleRegister,
signInWithEmailAndPass,
setUser,
logOut


}
}

export default useFirebase;