import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { selectedProduct } from "../redux/actions/productActions";

export default function ProductDetail() {
    const { productId } = useParams();

    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => console.log(" Err: ", err ))
        dispatch(selectedProduct(response.data))
    }
    
    useEffect(() => {
        if (productId && productId !== ""){
            fetchProductDetail();
        }
    }, [productId])

    const { id, category, title, price, image } = product;

    return (
    <div className="ui grid container">
        <div className="ui placeholder segment">
            {title}  {id}
        </div>
    </div>
    )    
}