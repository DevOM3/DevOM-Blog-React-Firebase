import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="home">
            <div className="container" >
                <div className="container my-5">
                    <h3 id="home-heading">
                        WELCOME
                        <br />
                        to
                        <br />
                        <br />
                        <span className="display-3" style={{ fontWeight: "bold" }}>
                            DevOM
                        </span>
                    </h3>
                    <h2 id="home-heading2">
                        <span id="typed"></span>
                    </h2>
                </div>
                <div className="container row my-4 card-container">
                    <div className="col-sm-6 my-2 card-block">
                        <Link to="/store" style={cardLinkStyle}>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="https://blog.iblesoft.com/wp-content/uploads/2016/09/App-Stores-Apple-iOS-vs-Google-Play-Android.jpg" />
                                <Card.Body>
                                    <Card.Title className="card-title">Mobile App Store</Card.Title>
                                    <Card.Text className="card-text">
                                        Want some of the best Android applications for your Smartphone? Here is the solution - The App Store for downloading your favourite apps by DevOM. Easy to use and lightweight apps but with best possible and unique features. Visit the store and explore all the apps.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-sm-6 my-2 card-block">
                        <Link to="/contact" style={cardLinkStyle}>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="http://www.3s-sys.com/wp-content/uploads/2015/08/contact-1.png" />
                                <Card.Body>
                                    <Card.Title className="card-title">Contact me</Card.Title>
                                    <Card.Text className="card-text">
                                        Have a question? No worries, I'm here to help you just click here and visit our Contact me page, ping me and I'll respond back ASAP!
                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div >
        </div>
    )
}

const cardStyle = {
    width: "auto",
}

const cardLinkStyle = {
    textDecoration: "none",
}

export default Home;

