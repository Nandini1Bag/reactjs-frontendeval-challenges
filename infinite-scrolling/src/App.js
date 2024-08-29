import { useEffect, useState } from 'react';
import './App.css';

function App() {

const [images,setimages]=useState([]);

  const fetchData=async (index)=>{
  //https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit9  
  try{
  const url=`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit9`;
  const res=await fetch(url);
  const data=await res.json();
  return data;
  }catch(Error){
    console.log("Error");
  }
  }

  const fetchfirstPage=async ()=>{
    const data=await fetchData(1);
    setimages(data)
    console.log(data);
  }

  useEffect(()=>{
    fetchfirstPage();
  })
  return (
    <div className="App">
    <h2>Infinite Scrolling</h2>
    <div className="container">
    {images.map((image,index)=>(
    <img 
     key={image.id}
     alt={image.title}
     src ={image.thumbnailUrl}/>
    ))}
    </div>
    </div>
  );
}

export default App;
