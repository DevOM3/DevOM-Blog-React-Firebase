import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../firebase';

const StoreApp = props => {
    const [app, setApp] = useState([]);
    const { id } = useParams();
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);

        if (id) {
            db.collection('store').doc(id).onSnapshot(snapshot => {
                setApp(snapshot.data());
            })
        }

        return () => setDidMount(false);
    }, [didMount, id]);

    if (!didMount) {
        return null;
    }

    return (
        <div className="container">
            <div className="column container mr-4 p-4">
                <div className="row">
                    <div className="col-md-3 p-3 mr-4">
                        <img src={app.imageURL} alt="store app" className="card-img-md" />
                    </div>
                    <div className="column">
                        <div className="col-md-9">
                            <h1>{app.title}</h1>
                        </div>
                        <div className="mx-3">
                            <p className="card-text" style={{ color: "grey" }}><small className="text-muted">{app.timestamp}</small></p>
                        </div>
                        <div className="bottom mx-3 mt-2">
                            <a href={app.link} rel="noopener noreferrer" className="btn btn-primary btn-md-m3" target="_blank" role="button">
                                Download App
                            </a>
                        </div>
                    </div>
                </div>
                <hr style={{ backgroundColor: "black" }} />
                <div className="row">
                    <div className="col-m3-12 p-2">
                        {app.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreApp;
