import './Store.css';
import './Contact.css';
import AppCard from "../components/AppCard";
import React, { useState, useEffect } from 'react';
import db from '../firebase';

const Store = () => {
    const [apps, setApps] = useState([]);
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);

        const unsubscribe = db.collection('store').onSnapshot(snapshot => (
            setApps(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                })))
        ))

        return () => {
            unsubscribe();
            setDidMount(false);
        };
    }, [didMount]);

    const showApps = () => {
        return apps.map(app => {
            return <AppCard app={app} key={app.id} />
        })
    }

    if (!didMount) {
        return null;
    }

    return (
        <div className="container">
            <h1 className="mt-3 mb-5 contact-heading">Store</h1>
            {showApps()}
        </div>
    )
}

export default Store;
