// import {PaymentElement} from '@stripe/react-stripe-js';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { closeModal, showModal } from '../features/modalSlice';
import { showToast } from '../features/Toast/toastSlice';
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(showModal());
        if(!stripe || !elements) {
            // Stripe.js has not yet loaded
            // Make sure to disable for submission until stripe.js has loaded
            
            return;
        }
        setInterval(() => {
            dispatch(showToast('Payment Confirmed'))
        }, 1000);
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/success'
            }
        });

        console.log(result);

        if(result.error) {
            console.log(result.error.message);
        } else {
            console.log(result)
            dispatch(closeModal());
            // Your customer will be redirected to your `return url`. For some payments, there may be an intermediate site first to authorize payment, then redirection.
        }
    }
    ;
    return (
        <Container className="mt-5 bg-light p-5" style={{width:'40vw'}}>

      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button style={{marginTop:'2rem', padding:'.5rem 2rem', background:'#333',color:'#fff'}} disabled={!stripe}>Submit</button>
      </form>
        </Container>
    );
  };

  export default CheckoutForm;