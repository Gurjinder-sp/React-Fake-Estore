// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';


const Loader = () => {
    // const [show, setShow] = useState(false);
    const {isShown} = useSelector(store => store.modal);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
    return (
        <>
       
  
        <Modal show={isShown}>
          <Modal.Body className='text-center h-75'>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="md" />
          <Spinner animation="grow" size='lg'/>
          </Modal.Body>
          
        </Modal>
      </>
      );
}
 
export default Loader;