import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../redux/action/product-action";

const ProductComponent = (props) => {

  const dispatch = useDispatch();

  return (
    <div class="single-product">
      <div class="product-f-image">
        <img src={props.image} alt="" />
        <div class="product-hover">
          <a onClick={() => dispatch(addToCart(props)) } class="add-to-cart-link">
            <i class="fa fa-shopping-cart"></i> Add to cart
          </a>
          <NavLink to={"/product/" + props.id} className="view-details-link">
            <i class="fa fa-link"></i> See details
          </NavLink>
        </div>
      </div>

      <h2>
        <a href="#">{props.name}</a>
      </h2>

      <div class="product-carousel-price">
        <ins>{props.discount_price}</ins> <del>{props.actual_price}</del>
      </div>
    </div>
  );
};

export default ProductComponent;
