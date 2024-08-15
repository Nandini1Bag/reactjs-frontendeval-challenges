import React, { useState } from 'react'
import '../App.css' ;

function FAQitem({faq,index}) {
    console.log('rendering -'+index);
    const [isShow,setisShow]=useState(false);


    const handleclick=()=>{
        setisShow(!isShow);
    }
  return (
    <div className='faq-box'>
        <div className='ques' onClick={handleclick}>
           <button className={isShow?'arrow': ''}>></button>
           <div>{faq.question}</div>
        </div>
       { isShow &&<div className='ans'>{faq.answer}</div>}
    </div>
  )
}

export default FAQitem