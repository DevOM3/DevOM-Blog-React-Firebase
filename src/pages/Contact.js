import './Contact.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button, Row } from "react-bootstrap";
import db from '../firebase';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [description, setDescription] = useState('');

    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const onContactFormSubmit = (e) => {
        e.preventDefault();
        if (
            name.length < 3 ||
            name.length > 21 ||
            phoneNumber.length < 10 ||
            phoneNumber.length > 13 ||
            description.length < 7 ||
            description.length > 5000
        ) {
            alert('You must fill every entry given below');
            return;
        }

        db.collection('contacts').add({
            name: name,
            email: email,
            phno: phoneNumber,
            description: description,
        }).then(() => {

            window.location = "/contact";
            alert("Thank you for Contacting me, I'll respond ASAP!");
        });
    }

    return (
        <div className="container">
            <h1 className="mt-3 mb-5 contact-heading">Contact me</h1>
            <Form onSubmit={onContactFormSubmit}>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Name" name="name" onChange={nameHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" name="email" onChange={emailHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalNumber">
                    <Form.Label column sm={2}>
                        Ph. No.
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" placeholder="Phone Number" name="phno" onChange={phoneNumberHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDescription">
                    <Form.Label column sm={2}>
                        Description
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" placeholder="Description" name="description" onChange={descriptionHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Ping DevOM</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Contact
