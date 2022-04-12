import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    loadProduct();
  }, [])
  
  const loadProduct = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/product/" + id;
    axios.get(url)
      .then((response) => {
        // console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div class="product-big-title-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="product-bit-title text-center">
                <h2>Preview</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="product-content-right">
                <div class="product-breadcroumb">
                  <a href="">Home</a>
                  <a href="">Category Name</a>
                  <a href="">{product.name}</a>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="product-images">
                      <div class="product-main-img">
                        <img src={product.image} alt="" />
                      </div>

                      <div class="product-gallery">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="product-inner">
                      <h2 class="product-name">{product.name}</h2>
                      <div class="product-inner-price">
                      <ins>{product.discount_price}</ins> <del>{product.actual_price}</del>
                      </div>

                      <form action="" class="cart">
                        <div class="quantity">
                          <input
                            type="number"
                            size="4"
                            class="input-text qty text"
                            title="Qty"
                            value="1"
                            name="quantity"
                            min="1"
                            step="1"
                          />
                        </div>
                        <button class="add_to_cart_button" type="submit">
                          Add to cart
                        </button>
                      </form>

                      <div class="product-inner-category">
                        <p>
                          Category: <a href="">Summer</a>. Tags:{" "}
                          <a href="">awesome</a>, <a href="">best</a>,{" "}
                          <a href="">sale</a>, <a href="">shoes</a>.{" "}
                        </p>
                      </div>

                      <div role="tabpanel">
                        <ul class="product-tab" role="tablist">
                          <li role="presentation" class="active">
                            <a
                              href="#home"
                              aria-controls="home"
                              role="tab"
                              data-toggle="tab"
                            >
                              Description
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#profile"
                              aria-controls="profile"
                              role="tab"
                              data-toggle="tab"
                            >
                              Reviews
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div
                            role="tabpanel"
                            class="tab-pane fade in active"
                            id="home"
                          >
                            <h2>Product Description</h2>
                            <p>
                              {product.description}
                            </p>
                          </div>
                          <div
                            role="tabpanel"
                            class="tab-pane fade"
                            id="profile"
                          >
                            <h2>Reviews</h2>
                            <div class="submit-review">
                              <p>
                                <label for="name">Name</label>{" "}
                                <input name="name" type="text" />
                              </p>
                              <p>
                                <label for="email">Email</label>{" "}
                                <input name="email" type="email" />
                              </p>
                              <div class="rating-chooser">
                                <p>Your rating</p>

                                <div class="rating-wrap-post">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                </div>
                              </div>
                              <p>
                                <label for="review">Your review</label>{" "}
                                <textarea
                                  name="review"
                                  id=""
                                  cols="30"
                                  rows="10"
                                ></textarea>
                              </p>
                              <p>
                                <input type="submit" value="Submit" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ProductPage;
