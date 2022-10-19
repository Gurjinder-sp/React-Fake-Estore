import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CartProduct = ({product}) => {
    return ( 
        <Card body style={{'height':'32vh'}} className='my-2'>
            <Row>
                <Col lg='3'>
                    <img src={product.image} height='100vh' alt="" />
                </Col>
                <Col lg='9' className='text-start'>
                    <p className='fs-2'>{product.title}</p>
                    <p>{product.description}</p>
                    <p className='fs-3 text-end'>${product.price}</p>
                </Col>
            </Row>
        </Card>
     );
}
 
export default CartProduct;