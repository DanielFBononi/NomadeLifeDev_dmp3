import { db } from "../firebase/config"
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
 }from "firebase/auth"
 import { useState, useEffect } from "react"

 import React from "react"

 export const useAuthentication = () =>{
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(null)
    const [Cancelled, setCancelled] = useState (false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if (Cancelled) {
            return
        }
    }
 }