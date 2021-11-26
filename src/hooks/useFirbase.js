import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import firbeaseInitialization from "../firebase/firebase.init";

firbeaseInitialization();
//firebase auth
const auth = getAuth();
//providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirbase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
   
    // reset error
    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 3000);
    }, [error]);
   
   
   
    // signin google
    function signInUsingGoogle() {
        
        return signInWithPopup(auth, googleProvider)
            
    }
    
    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    //    =========================
    
    
 

    // set name and profile image url
    function UpdateName() {
        updateProfile(auth.currentUser, {
            displayName: name,
           
        })
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    }
    
    
    // email varify

    function emailVerify() {
        sendEmailVerification(auth.currentUser).then(() => {
            alert(`Check email for verify your account  ${email}`);
        });
    }

   
    function signUpEmailPass() {
        
         return createUserWithEmailAndPassword(auth, email, password)
        
           
        
    }

    // get name
    function getName(e) {
        setName(e?.target?.value);
    }

    // get Email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    // Get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }


    // Sign Out
    const logOut = () => {
        signOut(auth).then((result) => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        })
        
     }
    
     //github sign in
    function signInUsingGithub() {
       return signInWithPopup(auth, githubProvider)
            
    }
     

    // Email sign in
    function signInWithEmail(e) {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    return {
        user,
        signInUsingGoogle,
        error,
        logOut,
        signInUsingGithub,
        setError,
        setUser,
        isLoading,
        signInWithEmail,
        getPassword,
        getEmail,
        getName,
        signUpEmailPass,
        emailVerify,
        UpdateName
    };
};

export default useFirbase;