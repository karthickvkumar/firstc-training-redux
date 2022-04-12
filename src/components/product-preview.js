import React from 'react';

const ProductPreviewComponent = (props) => {
  return (
    <div class="single-wid-product">
      <a href="single-product.html"><img src={props.image} alt=""
              class="product-thumb"/></a>
      <h2><a href="single-product.html">{props.name}</a></h2>
      <div class="product-wid-rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
      </div>
      <div class="product-wid-price">
        <ins>{props.discount_price}</ins> <del>{props.actual_price}</del>
      </div>
  </div>
  );
};

export default ProductPreviewComponent;