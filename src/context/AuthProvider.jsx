import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './../firebase/firebase.config';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const sinInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
        })
        return ()=>{
          unSubcribe();
        }
    },[])
    
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
          sinInUser,
          logOut,
          signInGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;