import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetail.css";
import ProductContext from '../store/product-context';

function ProdutcDetail() {
    const param = useParams();
    const productId = +param.productId

    const productCtx = useContext(ProductContext);
    const element = productCtx.products.filter(ele=>{
        return ele.id === productId
    })
    const data = element[0];
    return (
        <div className='products-div'>
            <div className='products-small-img'>
                <img/>
                <img/>
                <img/>
                <img/>
            </div>
            <div className='products-large-img'>
                <img src={data.image}/>
            </div>
            <div>
            <div className='products-detail-div'>
                <h2>{data.title} </h2>
                <p>{data.description}</p>
                <p>${data.price}</p>
            </div>
            <div className='products-details'>
                <h2>Product details</h2>
            </div>
            <div className='products-reviews'>
                <h3>Rating and Reviews</h3>
                <span className='products-rating'>3.9 *</span>
                <span>25,814 ratings and 1,903 reviews</span>
            </div>
            <div className='review-rating'>
                <span className='products-rating'>4.0*
                </span>
                <p>Like it</p>

            </div>
        </div>
        </div>
    )
}

export default ProdutcDetail
