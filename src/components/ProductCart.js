import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CurrencyIcon, StarIcon, TagIcon } from '../icons';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { showToast } from '../features/Toast/toastSlice';



const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    return (
    <Card  className="p-2 m-2 shadow-sm " style={{minHeight:'45vh'}}>
        <Card.Subtitle className='text-end'><TagIcon />{product.category}</Card.Subtitle>
      <Card.Img variant="top" className="w-50 mx-auto" style={{maxHeight:'18vh',objectFit:'contain'}} src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Row>
            <Col>
                <StarIcon/><Card.Text className="mt-2" >{product.rating.rate}({product.rating.count})</Card.Text>
            </Col>
            <Col>
                    <CurrencyIcon /><Card.Text className='fs-3'>
                    <b>{product.price}</b>
                    </Card.Text>
            </Col>
        </Row>
      
    <Button variant='dark' className='my-2' onClick={() => {
      dispatch(addToCart({product}));
      dispatch(showToast('Added'));
  
      }}>Add to Cart</Button>

        {/* <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>{product.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}

      </Card.Body>
     
    </Card>
    );
}
 
export default ProductCard;