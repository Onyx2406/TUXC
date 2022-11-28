import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card-hs">
      
      <div className="img-container-hs">
      <Link to={`/product/${product._id}`}>
        <img align="center" className="card-hs-img" src={product.image} alt={product.name} />
      
      </Link>
      </div>
      
      <div className="card-info-hs">
        
        <Link to={`/product/${product._id}`}>
          <div className="card-title-hs">{product.name}</div>
          <Rating
            // rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="price">₹{product.price}</div>
        </Link>
        
      </div>
    </div>
  );
}