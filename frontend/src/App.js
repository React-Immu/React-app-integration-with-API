import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import Editorview from './components/Editorview'
import ProductListView from './components/ProductListView'

function App() {

  const [editorModeOn, setEditorModeOn] = useState(false);

  const [products, setProducts] = useState([])


  /*const fetchData = () => {
    return fetch("https://localhost:3001/products")
          .then((response) => response.json())
          .then((data) => console.log(data));}

          useEffect(() => {
            
            fetchData();
            }, []);*/

   useEffect(() => {
    const getData = async () => {
      const results = await fetch('http://localhost:3001/products').then((res) => res.json());
      
      setProducts(results);
      console.log(results);
    }

    getData();
  }, []);


  const createProduct = (item) => {
    fetch('http://localhost:3001/products', { method: 'POST', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: item.name,
        image: item.image,
        manufacturer: item.manufacturer,
        category: item.category,
        description: item.description,
        price: item.price,
    })})
    
  }

  const onItemDelete = (item) => {
    let newProds = [...products];
    let deletedItem = newProds.find(p => p.id === item.id);
    let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
    fetch(`http://localhost:3001/products/${deletedItem.id}`, { method: 'DELETE'})
    newProds.splice(deletedItemIndex, 1);
    setProducts(newProds);
  }

  

  let output = <ProductListView products={products} />;
  if( editorModeOn == true ) {
    output = <Editorview products={products} onItemDelete={ onItemDelete } createProduct = { createProduct }/>;
  }

  return (
    <div>   
      <div>
          <button onClick={ () => setEditorModeOn(!editorModeOn)}>Admin Mode Toggle</button>       
          </div>       
          { output }    
      </div>
  );
}

export default App;
