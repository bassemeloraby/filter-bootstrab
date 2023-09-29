import React from 'react'

const Products = ({result}) => {
  console.log(result)
  return (
    <div>
    <h1>Products</h1>
    
    {result}
    </div>
  )
}

export default Products