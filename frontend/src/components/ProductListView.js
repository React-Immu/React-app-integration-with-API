import React from 'react'
import ProductItem from './ProductItems'
export default function ProductListView(props) {
  return (
<div className="productContainer">  
    { props.products.map(p => <ProductItem image={p.image} name={p.name} manufacturer={p.manufacturer} category={p.category} description={p.description} price={p.price}/>) }
</div>
  )
}
