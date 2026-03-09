import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './../firebase/firebase.config';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return ()=>{
          unSubcribe();
        }
    },[])

    const updateUser =(name,photo)=>{
        setLoading(true);
        const user ={displayName:name,photoURL:photo}
        return updateProfile(auth.currentUser,user);
    }
    const signInGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo={
          user,
          setUser,
          loading,
          createUser,
          signInUser,
          logOut,
          signInGoogle,
          updateUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;