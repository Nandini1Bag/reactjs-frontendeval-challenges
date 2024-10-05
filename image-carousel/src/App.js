import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [Images,setImages]=useState([]);
  const [CurrIndex,setCurrIndex]=useState(0);
  const [Isloading,setIsLoading]=useState(false);

  const fetchImages=async ()=>{
    setIsLoading(true);
    const url='https://www.reddit.com/r/aww/top/.json?t=all';
    const res= await fetch(url);
    const result= await res.json();
   const data=result.data.children;
   //console.log(data);
   const list=data.filter((item)=> 
    item.data.url_overridden_by_dest.includes('.jpg'))
   .map((item)=>item.data.url_overridden_by_dest);
   console.log(list);
   setImages(list);
   setIsLoading(false);
  }

  useEffect(()=>{
    fetchImages();
  },[]);

 const handleOnclick=(dir)=>{
 const lastindex=Images.length-1;
 if(dir==='left'){
  if(CurrIndex===0){
    setCurrIndex(lastindex);
  }else{
    setCurrIndex((idx)=>idx-1);
  }
 }else if(dir==='right'){
  if(lastindex===CurrIndex){
    setCurrIndex(0);
  }else{
    setCurrIndex((idx)=>idx+1)
  }
 }
 }

 useEffect(()=>{
const intervalid=setInterval(() => {
  handleOnclick('right');
 }, 1000);
 return ()=>{
  clearInterval(intervalid);
}
 },[CurrIndex]);

  return (
    <div className="App">
      {Isloading ?<div>Loading....</div>:
      <>
      <button className='btn'  onClick={()=>handleOnclick('left')}>{"<"}</button>
      <img src={Images[CurrIndex]} alt="Not Found"/>
      <button className='btn right' onClick={()=>handleOnclick('right')}>{">"}</button>
      </>}
      
    </div>
  );
}

export default App;
