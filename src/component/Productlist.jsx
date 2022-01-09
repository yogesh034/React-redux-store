import React,{useEffect} from 'react'
import {Card,Button,Container, Row} from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import axios from 'axios';
import { setproduct } from './../redux/action/product-action';
import {Link} from 'react-router-dom';

export default function Productlist() {

    const dispatch = useDispatch();

    const products = useSelector(state => state.allproducts.product);

    const fetchapi = async () =>{
        const responce = await axios.get("https://fakestoreapi.com/products")
        .catch((error)=>{
            console.log(error);
        })
       // console.log(responce.data);
        dispatch(setproduct(responce.data));
    }

    useEffect(() => {
        fetchapi();
       // console.log(products[0]);
    }, []);

    const rederlist = products.map((product)=>{
        const {id,title,price,image,description} = product
        return(
            <Card style={{ width: '18rem' }} key={id}>
                <Link to={`/product/${id}`}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 {title}
                </Card.Text>
                <Button variant="primary">View Product</Button>
            </Card.Body>
            </Link>
            </Card>
        )
    })

    return (
        <>
        <Container>
            <Row>
            {rederlist}
            </Row>
        </Container>
        
        </>
    )
}
