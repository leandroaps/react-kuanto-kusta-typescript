/* eslint-disable @typescript-eslint/restrict-template-expressions */
import '../styles/Products.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    void fetch('https://fakestoreapi.com/products')
      .then(async (res) => await res.json())
      .then((json) => {
        setProducts(json)
      })
  }, [])

  return (
    <>
      <h1>PRODUCTS</h1>
      {products?.map((product: any): any => (
        <div className="card" key={product.id}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.description}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {product.category}
            </h6>
            <span className="badge bg-secondary">
              Price US$ {product.price}
            </span>
            <p className="card-text">{product.description}</p>
            <Link to={`/details/${product.id}`} className="btn btn-primary">
              Details
            </Link>
            <Link to={`/details/${product.id}`} className="btn btn-primary">
              Add Cart
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default Products
