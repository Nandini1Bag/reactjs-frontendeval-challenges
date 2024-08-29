import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [Products, setProducts]=useState([]);
  const [page,setPage]=useState(1);

  const fetchData= async()=>{
    const url='https://dummyjson.com/products?limit=100';
    const res= await fetch(url);
    const data= await res.json();
    const products=data.products;
    if (products.length>0){
      setProducts(products);
    }
    console.log(products);   
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const selectedPageHandler=(selectedpage)=>{
    if(selectedpage>=1 && selectedpage<=Products.length/10
      && selectedpage!==page){
      setPage(selectedpage);
    }
   
  }

  return (
    <div className="App">
     <h2>Pagination</h2>
     {Products.length>0 &&
     <div className='Allproducts'>
      {Products.slice((page*10-10),page*10).map((prod)=>(
        <div key={prod.id} className='product'>
          <img src={prod.thumbnail} alt={prod.title}/>
          <h3>{prod.title}</h3>
        </div>
      ))}
     </div>
  }
  {Products.length>0 && <div className='pagination'>
    <span 
      className={page>1?'':'pagination_disable'}
      onClick={()=>selectedPageHandler(page-1)}>⬅️</span>
    {[...Array(Products.length/10)].map((_,i)=>
      (<span key={i} 
        className={page===i+1?'pagination_selected':''}
      onClick={()=>selectedPageHandler(i+1)}>{i+1}</span>))}
    <span
     className={page<Products.length/10?'':'pagination_disable'}
     onClick={()=>selectedPageHandler(page+1)}>➡️</span>
  </div>}
    </div>
  );
}

export default App;
