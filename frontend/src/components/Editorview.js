import React, { useState } from 'react'


export default function Editorview(props) {
const [name, setName] = useState("")
const [image, setImage] = useState("")
const [manufacturer, setManufacturer] = useState("")
const [category, setCategory] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")
  return ( <div>
    <div>
      <h2 >Create product</h2>

        <form>
            <div>Name  <input value={ name} onChange={(event) => setName(event.currentTarget.value)} type="text"/></div>
            <div >Image URL  <input value={ image} onChange={(event) => setImage(event.target.value)} type="text"/></div>
            <div>Manufacturer  <input value={manufacturer} onChange={(event) => setManufacturer(event.currentTarget.value)} type="text"/></div>
            <div>Category  <input value={category} onChange={(event) => setCategory(event.currentTarget.value)} type="text"/></div>
            <div>Description  <input value={description} onChange={(event) => setDescription(event.currentTarget.value)}type="text"/></div>
            <div>Price  <input  value={price} onChange={(event) => setPrice(event.currentTarget.value)}type="text"/></div>

            <button onClick={()=>props.createProduct({image,name,manufacturer, category, description,price})}>Save</button>
                        </form>
           
         <div className="asd">Esimerkki URL uuden tuotteen lisäämiseen: </div>
          <div className="asd2">https://dummyjson.com/image/i/products/7/thumbnail.jpg</div>  
          <div>URLista numeroa vaihtamalla saa muita kuvia halutessaan</div> 
    </div>
            
              
      <div>
        <h2>Delete product</h2>
          {props.products.map(p => <div> {p.name} <button onClick={() => props.onItemDelete(p)}>DEL</button></div>)}
        </div>
     </div>
  )
}
