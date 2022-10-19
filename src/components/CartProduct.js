import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';
import { DeleteIcon } from '../icons';

const CartProduct = ({product}) => {
    const dispatch = useDispatch();

    return ( 
        <Card body style={{'height':'32vh'}} className='my-2'>
            <Row>
                <Col lg='3'>
                    <img src={product.image} height='100vh' alt="" />
                </Col>
                <Col lg='9' className='text-start'>
                    <span className="float-end" style={{cursor:'pointer'}} onClick={() => dispatch(removeFromCart({product}))}> <DeleteIcon/> </span>
                    
                    <p className='fs-2'>{product.title}</p>
                    <p>{product.description}</p>
                    <p className='fs-3 text-end'>${product.price}</p>
                </Col>
            </Row>
        </Card>
     );
}
 
export default CartProduct;