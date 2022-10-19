import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCart';
import { getAllProducts } from './../features/products/productSlice';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterProducts from '../components/Filter';
import { calculateQuantity } from '../features/cart/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(store => store.products);
    const { cartItems} = useSelector(store => store.cart);

    useEffect(() => {
        dispatch(calculateQuantity())
    },[cartItems]);

    // console.log(products)  
    useEffect(() => {
        dispatch(getAllProducts())
    },[]);
    return ( 
        <Container style={{'maxHeight':'90vh','overflow':'auto'}}>
            <Row className='text-start my-2'>
                <FilterProducts />
            </Row>
            <Row className=''>
            {products.map(product => {
             return <Col lg='4'><ProductCard key={product.id} product={product}/></Col>
            })}
            </Row>
        </Container>
     );
}
 
export default Products;