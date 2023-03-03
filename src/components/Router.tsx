import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../components/Loader';

const Cart = React.lazy(async () => await import('../pages/Cart'))
const Details = React.lazy(async () => await import('../pages/Details'))
const Products = React.lazy(async () => await import('../pages/Products'))
const Error = React.lazy(async () => await import('../pages/Error'))

const Router: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Suspense>
  )
}
export default Router
