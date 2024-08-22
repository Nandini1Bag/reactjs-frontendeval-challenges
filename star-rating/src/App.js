
import { useState } from 'react';
import './App.css';

function App() {
  const [rating,setrating]=useState(0);
  const [hover,sethover]=useState(0);
  console.log('rating-',rating);
  console.log('hover-',hover);
  console.log('(rating && hover) || hover -',(rating && hover) || hover);

  return (
    <div className="App">
    <h1>Star Rating</h1>
    {[1,2,3,4,5].map((num)=>{
      return (<button key={num} 
        onClick={()=>setrating(num)}
        onMouseOver={()=>sethover(num)}
        onMouseLeave={()=>sethover(rating)}>
        <span className={
          `star ${num<=((rating && hover) || hover)?'on':'off'}`
          }>&#9733;</span>
      </button>)
    })}
    </div>
  );
}

export default App;
