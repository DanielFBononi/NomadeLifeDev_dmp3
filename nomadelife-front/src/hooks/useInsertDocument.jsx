import { useState, useEffect, usebuilder, useReducer } from "react";
import { db } from '../firebase/config'
import { colletion, addDoc, Timestamp } from 'firebase/firestore'

const initialState = {
    loading: null,
    error: null

}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "INSERT_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const useInsertDocument = (docColletion) => {
    const [response, dispash] = useReducer(insertReducer, initialState)
    const [Cancelled, setCancelled] = useState(false)

    const checkCancelledBeforeDispash = (action) => {
        if (!Cancelled) {
            dispash(action)
        }
    }

    const insertDocument = async (document) => {
        checkCancelledBeforeDispash({ type: "LOADING" })

        try {
            const newDocument = { ...document, creatAT: Timestamp.now() }
            const insertDocument = await addDoc(
                colletion(db, dbColletion ),
                newDocument
            )
        
                checkCancelledBeforeDispash({
            type: "INSERT_DOC",
            payload: insertDocument
        })
         }catch (error) {
            checkCancelledBeforeDispash({
                type: "ERROR",
                payload: error.menssage
            })
        
             }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return (
        insertDocument,
        response
    )
    }
}
