import React, { useEffect, useState } from 'react';

interface Details {
  id: string
  title: string
  description: string
}

const Cart: React.FC = () => {
  const [details, setDetails] = useState<Details>()
  useEffect(() => {
    void fetch('https://fakestoreapi.com/products/1')
      .then(async (res) => await res.json())
      .then((json) => {
        console.log(json)
        setDetails(json)
      })
  }, [])

  return (
    <>
      <h1>DETAILS</h1>
      <h2>{details?.title}</h2>
      <p>{details?.description}</p>
    </>
  )
}

export default Cart
