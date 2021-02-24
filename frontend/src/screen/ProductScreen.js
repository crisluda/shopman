import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import {Row,Col,Image,ListGroup,Card,Button} from "react-bootstrap";
import Rating from "../components/Rating"
import products from "../products"
import { string } from 'prop-types';

const ProductScreen = ({match}) => {
    const product=products.find(p=>p._id===match.params.id)

    return (
        <>
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
                    {product.countInStock>=1 ? `in stock`:`out of stock` }
                </Col>
            </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={product.countInStock<1}>
                    Add to Cart
                </Button>
            </ListGroup.Item>
        </ListGroup>
        </Col>
        </Row>
        </>
    )
}

export default ProductScreen
