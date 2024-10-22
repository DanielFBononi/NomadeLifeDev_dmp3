import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc, orderBy, collection, query, where, onSnapshot } from 'firebase/firestore';

export const useFetchDocument = (dbCollection, search = null) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            if (cancelled) {
                return;
            }

            setLoading(true);
            const collectionRef = collection(db, dbCollection);

            try {
                let q;
                if (search) {
                    q = query(
                        collectionRef,
                        where("tags", "array-contains", search),
                        orderBy("createdAt", "desc") 
                    );
                } else {
                    q = query(collectionRef, orderBy("createdAt", "desc")); 
                }

                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    );
                });

                return () => {
                    cancelled = true; 
                    unsubscribe();
                };
            } catch (error) {
                console.error(error);
                setError(error.message);
            } 
        };

        loadData();
    }, [dbCollection, search]); 

    return { documents, error, loading };
};
