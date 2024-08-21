
import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [IsShow,setIsShow]=useState(false);
  const [IsOfferAccepted,setOfferAccepted]=useState(false);


  const handleOpenModal=()=>{
 setIsShow(true);
  }

const handleClose=()=>{
  setIsShow(false);
}
const handleAccept=()=>{
  setOfferAccepted(true);
  setIsShow(false);
}

  return (
    <div className="App">
      <div className='show-offer'>
        
     {!IsOfferAccepted && <button className='offer-btn' onClick={handleOpenModal}>Show Offer</button>} 
     {IsOfferAccepted && <div style={{fontSize : 50}}> Offer accepted</div>}
      </div>
    
       {IsShow && <Modal handleAccept={handleAccept} handleClose={handleClose}/>}
    </div>
  );
}

export default App;
