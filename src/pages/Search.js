import AppCard from "../components/AppCard";
import React, { useState, useEffect } from 'react';
import '../pages/Store.css';
import db from "../firebase";
import { useParams } from "react-router-dom";

const Search = props => {
    const [apps, setApps] = useState([]);
    const { str } = useParams();

    useEffect(() => {
        const unsubscribe = db.collection('store').onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }));

            const sortedData = data.map(app => {
                if ((app.data.title.toLowerCase().includes(str.replace("%20", " ").toLowerCase())) || (app.data.description.toLowerCase().includes(str.replace("%20", " ").toLowerCase()))) {
                    return app;
                }
                return undefined;
            })
            setApps(sortedData.filter(data => data !== undefined));
        })

        return () => unsubscribe()
    });

    const showApps = () => {
        return apps.length === 0
            ? <div className="container"><p style={{ display: "inline-block" }}>App matching your search &nbsp;</p><h3 style={{ display: "inline-block" }}>{props.match.params.str}</h3><p style={{ display: "inline-block" }}>&nbsp;&nbsp;is not currently available........</p></div>
            : apps.map(app => {
                return <AppCard app={app} key={app.id} />
            })
    }

    return (
        <div className="container">
            <h1 className="mt-3 mb-5 contact-heading">Search Results</h1>
            {showApps()}
        </div>
    )
}

export default Search;
