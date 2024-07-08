import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import { productData } from "./productData";
import axios from "axios";
import { BASE_URL } from "../../utls/PATH";
import Spinner from 'react-bootstrap/Spinner';

const Products = () => {
  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getProducts()

  }, [])
  const getProducts = async () => {
    setLoading(true)
    try {
      const products = await axios.get(`${BASE_URL}api/menu`)
      if (products) {
        console.log(products?.data, 'products');
        setProducts(products?.data)
        setLoading(false)
        setRefresh(!refresh)
      }
    } catch (error) {
      setLoading(false)
      alert(error?.code)
    }
  }

  return (
    <section className="product-wrapper">
      <header className="product-header">
        <h1>Our Products</h1>
      </header>

      <div>
        <h3>Our Exclusive Intercontinental dish</h3>

        <div>

        </div>
        <section className="products">
          {loading && <Spinner animation="border" variant="secondary" role="status">
          </Spinner>}
          {
            products.map((product) => (

              <ProductCard imge={product.imge} title={product.title} price={product.price} id={product.id} />

            ))
          }
        </section>


      </div>
    </section>
  );
};

export default Products;

