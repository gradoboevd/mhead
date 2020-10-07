import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { CREATE_USER } from './../redux/actionsTypes'


export const CreateUserModal = () => {

    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState('');
    const [surNameValue, setSurNameValue] = useState('');
    const [descValue, setDescValue] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createUserSaga = () => {
        if(nameValue && surNameValue && descValue) {
            dispatch({
                type: CREATE_USER,
                payload: {
                    name: nameValue,
                    surname: surNameValue,
                    desc: descValue
                }
            });
            handleClose()
        } else alert('Input fields should not be empty!')
    };

    return (
        <div>
            <Button className="mb-3" variant="primary" onClick={handleShow}>
                Create user
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Creating a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={({target}) => setNameValue(target.value)} type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control onChange={({target}) => setSurNameValue(target.value)} type="text" placeholder="Enter surname" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={({target}) => setDescValue(target.value)}  type="text" placeholder="Enter description" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={createUserSaga}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

