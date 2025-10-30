import React from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetail.css";

function ProdutcDetail() {
    const {productId} = useParams();
    return (
        <div className='products-div'>
            <div className='products-small-img'>
                <img/>
                <img/>
                <img/>
                <img/>
            </div>
            <div className='products-large-img'>
                <img/>
            </div>
            <div>
            <div className='products-detail-div'>
                <h2>Smartees </h2>
                <p>Men Full Sleeve Printed Hooded Sweatshirt</p>
                <p>$20</p>
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
