import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../features/products/productSlice';

const FilterProducts = () => {
    const dispatch = useDispatch();
    return ( 
        <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
      Filter Products
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => dispatch(filterProducts("men's clothing"))}>men's clothing</Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(filterProducts("jewelery"))}>jewelery</Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(filterProducts("electronics"))}>electronics</Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(filterProducts("women's clothing"))}>women's clothing</Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(filterProducts("all"))}>All</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
     );
}
 
export default FilterProducts;