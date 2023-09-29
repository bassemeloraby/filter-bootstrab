import React from 'react'
import Button from 'react-bootstrap/Button';

const Recommended = ({ handleClick }) => {
  return (
    <div>
    <h2 className="">Recommended</h2>
    <Button variant="primary" onClick={handleClick} value="" >All Products</Button>{' '}
    <Button variant="primary" onClick={handleClick}  value="Nike">Nike</Button>{' '}
    <Button variant="primary" onClick={handleClick} value="Adidas">Adidas</Button>{' '}
    <Button variant="primary" onClick={handleClick} value="Puma">Puma</Button>{' '}
    <Button variant="primary" onClick={handleClick}  value="Vans">Vans</Button>{' '}
    
    </div>
  )
}

export default Recommended