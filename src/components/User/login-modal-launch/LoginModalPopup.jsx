import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiUser } from "react-icons/ci";
import Form from "react-bootstrap/Form";

function LoginModalPopup({ loggedIn, setLoggedIn }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <div
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        className='user-login text-secondary'
      >
        <div className='user-img'>
          <CiUser size={20} />
        </div>
        <div className='user-links'>
          <p>Log In</p>
          <p className='mx-1'> | </p>
          <p>Register</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Form className='mx-4'>
          <Modal.Header closeButton>
            <Modal.Title className='text-success'>Log In</Modal.Title>
          </Modal.Header>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter username' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='success' onClick={handleLogin}>
              Log In
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default LoginModalPopup;
