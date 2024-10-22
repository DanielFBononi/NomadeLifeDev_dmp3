import { db } from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"
import { useState, useEffect } from "react"

import React from "react"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }
    async function createuser(data) {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {displayName: data.displayName})
            setLoading(false)

            return user

        }catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.include('Password')) {
                systemErrorMessage = "A senha precisa conter ao menos 6 caracteres."
            }else if (error.message.includ('email-already')) {
                systemErrorMessage = "E-mail ja cadastrado em nosso sistema."
            }else(
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            )

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const login = async (data) =>{
        checkIfIsCancelled()

        setLoading(true)
        setError(true)

        try{
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setLoading(false)
        }catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.includes('Ininvalid-login-credentials')) {
                systemErrorMessage = "Este usuario nao tem registro em nossos sistemas."
            }else if (error.message.includes('wrong-password')) {
                systemErrorMessage = "Existe algum error em suas credenciais delogin."
            }else(
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            )

            setLoading(false)
            setError(systemErrorMessage)
        }



    }

    const logout =  () =>{
     checkIfIsCancelled()
     signOut(auth)
    }

    useEffect(() =>{
        return () => setCancelled(true)
    })

    return (
        auth,
        createuser,
        error,
        loading,
        logout,
        login
    )
}