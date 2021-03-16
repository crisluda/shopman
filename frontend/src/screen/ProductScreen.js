import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import {Row,Col,Image,ListGroup,Card,Button,Form} from "react-bootstrap";
import Rating from "../components/Rating"
import {useDispatch,useSelector} from 'react-redux';
import {listProductDetails} from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';


const ProductScreen = ({history,match}) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product}=productDetails
    useEffect(() => {
        dispatch(listProductDetails(match.params.id)) 
    },[dispatch,match])
    const addToCartHandler=()=>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    

    return (
        <>
        {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : (
            <Row>
            <Col md={6}><Image src={product.image} alt={product.name} fluid/></Col>
            <Col md={3}>
            <ListGroup variant="flush"/>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
            <h6>Description:</h6> {product.description}
            </ListGroup.Item>
            </Col>
            <Col>
            <ListGroup>
                <ListGroup.Item>
                <Row>
                    <Col>
                    Price: 
                    </Col>
                    <Col>
                    <strong>
                         ${product.price} 
                    </strong>
                    </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                    <Col>
                    Status: 
                    </Col>
                    <Col>
                        {product.countInstock>=1 ? `in stock`:`out of stock` }
                    </Col>
                </Row>
                </ListGroup.Item>
                {product.countInstock >= 1 && (
                    <ListGroup.Item >
                        <Row>
                            <Col>qty</Col>
                            <Col>
                            <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)}>
                                {[...Array(product.countInstock).keys()].map((x)=>(
                                    <option value={x + 1} key={x + 1}>{x + 1}</option>
                                    
                                ))})
                                
                            </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <ListGroup.Item>
                    <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInstock<1}>
                        Add to Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
        )}
        
        </>
    )
    
}

export default ProductScreen
