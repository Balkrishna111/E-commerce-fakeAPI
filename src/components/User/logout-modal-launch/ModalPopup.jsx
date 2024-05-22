import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalPopup({ setLoggedIn, loggedIn }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setLoggedIn(false);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <>
      <a onClick={handleShow}>Logout</a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Log-Out</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-danger'>
          Are you sure you want to Logout?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='danger' onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;
