import axios from 'axios';
import React,{useEffect} from 'react'
import {Card,Button,Container, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { getproduct } from '../redux/action/product-action';

export default function ProductDetails() {
    const productID = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state.product);
    const {title,price,image,description} = state;
    const fetchproduct = async (id) =>{
        const responce = await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch((error)=>{
            console.log(error);
        })
        console.log(responce.data);
        dispatch(getproduct(responce.data));
    }

    useEffect(() => {
        
        fetchproduct(productID['productId']) 
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem' }} >
                
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 {description}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
