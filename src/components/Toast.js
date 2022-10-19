import { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { closeToast } from '../features/Toast/toastSlice';
import ToastContainer from 'react-bootstrap/ToastContainer';


const ToastComp = () => {

    const { show, message } = useSelector(store => store.toast);
    const dispatch = useDispatch();
    useEffect(() => {
        if(show) {
            setTimeout(() => {
                dispatch(closeToast());
            },1000)
        }
    },[show])
    return ( 
        <ToastContainer position='top-center'>

        <Toast show={show}>
        {/* <Toast.Header>
         
        </Toast.Header> */}
        <Toast.Body className='fs-4'>{message}</Toast.Body>
      </Toast>
        </ToastContainer>
     );
}
 
export default ToastComp;