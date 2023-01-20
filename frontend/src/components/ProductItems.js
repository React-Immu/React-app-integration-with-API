import React from 'react'

export default function Productitems (props) {
  return (
    <div className="productItem">
    <div><h1>{ props.name }</h1></div>
    <img src={ props.image } />
    <div>Manufacturer: {props.manufacturer}</div>
    <div>Item category: {props.category}</div>
    <div>description: {props.description }</div>
    <div>{ props.price }</div>
    </div>);   
}
