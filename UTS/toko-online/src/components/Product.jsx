import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <div className='card'>
        <img class="card-img-top"src={product.image} alt={product.name}/>
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <p class="card-text">${product.price}</p>
          <a href="#" class="btn btn-primary" onClick={() => onAdd(product)}>Add To Cart</a>
        </div>
      </div>
    </div>
  );
}