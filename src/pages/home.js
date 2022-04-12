import React, {useEffect, useState} from "react";
import axios from "axios";
import HeaderComponent from "../components/header";
import ProductComponent from "../components/product";
import ProductPreviewComponent from "../components/product-preview";
import FooterComponent from "../components/footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomePage = () => {

  useEffect(() => {
    loadLatestProduct();
    loadProductPreview();
  }, []);

  const [recentProduct, setRecentProduct] = useState([]);
  const [productPreview, setProductPreview] = useState({
    recentlyViewed : [],
    topNew : [],
    topSelling : []
  });

  const loadLatestProduct = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/products/latest";
    
    axios.get(url)
      .then((response) => {
        setRecentProduct(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }
 
  const loadProductPreview = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/product/preview";
    axios.get(url)
      .then((response) => {
        setProductPreview(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const latestProductList = recentProduct.map((value, index) => {
    return(
      <ProductComponent {...value} key={index}></ProductComponent>
    )
  })

  const recentlyViewed = productPreview.recentlyViewed.map((value, index) => {
    return(
      <ProductPreviewComponent {...value} key={index}></ProductPreviewComponent>
    )
  })
  
  const topNew = productPreview.topNew.map((value, index) => {
    return(
      <ProductPreviewComponent {...value} key={index}></ProductPreviewComponent>
    )
  })
  
  const topSelling = productPreview.topSelling.map((value, index) => {
    return(
      <ProductPreviewComponent {...value} key={index}></ProductPreviewComponent>
    )
  })


  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="slider-container">
        <Carousel>
          <div>
            <img src={require("../images/h4-slide2.png")} />
          </div>
          <div>
            <img src={require("../images/h4-slide3.png")} />
          </div>
          <div>
            <img src={require("../images/h4-slide4.png")} />
          </div>
        </Carousel>
      </div>

      <div class="maincontent-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="latest-product">
                <h2 class="section-title">Latest Products</h2>
                <div class="product-carousel">
                  {latestProductList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="promo-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo1">
                <i class="fa fa-refresh"></i>
                <p>30 Days return</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo2">
                <i class="fa fa-truck"></i>
                <p>Free shipping</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo3">
                <i class="fa fa-lock"></i>
                <p>Secure payments</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo4">
                <i class="fa fa-gift"></i>
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-widget-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Top Sellers</h2>
                <a href="" class="wid-view-more">
                  View All
                </a>
                {topSelling}
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Recently Viewed</h2>
                <a href="#" class="wid-view-more">
                  View All
                </a>
                {recentlyViewed}
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Top New</h2>
                <a href="#" class="wid-view-more">
                  View All
                </a>
                {topNew}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;
