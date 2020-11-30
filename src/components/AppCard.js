import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppCard = ({ app }) => {
    return (
        <Link to={`/storeApp/${app.id}`} style={cardLinkStyle}>
            <Card className="mb-2">
                <div className="row no-gutters p-4">
                    <div className="col-md-3">
                        <Card.Img variant="top" className="card-img" src={app.data.imageURL} />
                    </div>
                    <div className="col-md-9">
                        <Card.Body>
                            <h3 className="card-title">{app.data.title}</h3>
                            <Card.Text className="card-text">
                                {app.data.description.slice(0, 451)}
                            </Card.Text>
                            <Card.Text className="card-text">
                                <small className="text-muted">Published on: {app.data.timestamp}</small>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

const cardLinkStyle = {
    textDecoration: "none",
}

export default AppCard;
