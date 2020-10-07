import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { EDIT_USER } from './../redux/actionsTypes'


export const EditUserModal = ({id, currentNameValue, currentSurnameValue, currentDescValue}) => {

    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState(currentNameValue);
    const [surNameValue, setSurNameValue] = useState(currentSurnameValue);
    const [descValue, setDescValue] = useState(currentDescValue);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editUserSaga = (id) => {
        if(nameValue && surNameValue && descValue) {
            dispatch({
                type: EDIT_USER,
                payload: {
                    id,
                    user: {
                        name: nameValue,
                        surname: surNameValue,
                        desc: descValue
                    }
                }
            });
            handleClose()
        } else alert('Input fields should not be empty!')
    };

    return (
        <div>
            <Button className="btn btn-warning mt-3 mr-3" variant="primary" onClick={handleShow}>
                Edit user
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editing a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={({target}) => setNameValue(target.value)} value={nameValue} type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control onChange={({target}) => setSurNameValue(target.value)} value={surNameValue} type="text" placeholder="Enter surname" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={({target}) => setDescValue(target.value)} value={descValue} type="text" placeholder="Enter description" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => editUserSaga(id)}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

