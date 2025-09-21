import React from 'react'

const ProductCard = ({id,title,image}) => {
  return (
    <div >
         <div className='product'>  <img src={image} alt={title} /> {title}</div> 
    </div>
  )
}

export default ProductCard