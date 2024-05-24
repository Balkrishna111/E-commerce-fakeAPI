import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function ModalPopup({ setLoggedIn, loggedIn }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleShow = () => {
    setShow(true);
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
          <Link to='/'>
            <Button variant='danger' onClick={handleLogout}>
              Logout
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;
