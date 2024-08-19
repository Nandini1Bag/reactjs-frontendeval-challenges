
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [principal,setprincipal]=useState(0);
  const [interest,setinterest]=useState(0);
  const [years,setyears]=useState(0);
  const [EMI,setEMI]=useState(0);

 const handleChange=(e)=>{
    let name=e.target.id;
  let value=parseInt(e.target.value);
  if(name==="principal"){
    setprincipal(value);
  }else if (name==='interest'){
    setinterest(value);
  }else{
    setyears(value);
  }
  }

 // P(r(1+r)^n/((1+r)^n)-1))
const calculateEMI=()=>{
  if(principal && interest && years){
    let r=interest/12/100;
    let n=years*12;
    const calpow=Math.pow((1+r),n);
    const amount=principal*(r*(calpow)/(calpow-1));
    setEMI(Math.round(amount));
  }
}
 
// useEffect(()=>{
//   calculateEMI();
//   },[principal,interest,years]);
const handleCalculate=()=>{
  calculateEMI();
}
  return (
    <div className="mort-cal">
     <h1>Mortgage Calculator</h1>
     <div className='inputs'>
      <p>Principal:</p>
      <input  onChange={handleChange} type='number' id='principal'></input>
      <p>Interest rate:</p>
      <input  onChange={handleChange}  type='number' id='interest'></input>
      <p>Years:</p>
      <input  onChange={handleChange}  type='number' id='years'></input>
     </div>
     <div className='output'>
     <button onClick={handleCalculate}>Calculate</button>
     <p>your EMI is {EMI}</p>
     </div>

    </div>
  );
}

export default App;
