import {react, useState} from 'react'

const StarRating=({totalstars})=>{
const [rating,setRating]=useState(0);
const [Hover,setHover]=useState(0);

const ratingmessage=['awful','poor','Good','Fair','Excellent'];

const getratingmessage=(index)=>{
  return ratingmessage[Math.ceil(index)-1];
}
const handleclick=(index)=>{
    setRating(index);
}
const handleMouseLeave=(index)=>{
    setHover(0);
}
const HandleMouseOver=(index)=>{
    setHover(index);    
}
const renderStar=(index)=>{
    return(
        <span
        key={index}
        className='star'
        onClick={()=>handleclick(index+1)}
        onMouseOver={()=>HandleMouseOver(index+1)}
        onMouseLeave={()=>handleMouseLeave(index+1)}>
         &#9733;
        </span>
    )
}
    return(
        <div className='container'>
         <div className='star-rating'>
         {Array.from({length:totalstars},(_,index)=>renderStar(index))}
          <span className='ratingmsg'>{getratingmessage(rating)}</span>  
        </div>
        </div>
     
    )
}

export default StarRating;