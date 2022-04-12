import React, {useEffect, useState} from "react";
import axios from "axios";
import HeaderComponent from "../components/header";
import ProductComponent from "../components/product";
import FooterComponent from "../components/footer";

const ShopPage = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadProduct();
  }, [])

  const loadProduct = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/products";
    axios.get(url)
      .then((response) => {
        console.log(response)
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const productList = product.map((value, index) => {
    return(
      <div className="col-md-3 col-sm-6" key={index}>
        <ProductComponent {...value}></ProductComponent>
      </div>
    )
  })

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div class="product-big-title-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="product-bit-title text-center">
                <h2>Smartphones</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            {productList}
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ShopPage;
