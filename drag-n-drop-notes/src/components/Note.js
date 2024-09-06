import React from 'react'
import {forwardRef} from "react";

const Note=forwardRef(({content,initialPos,...props},ref) =>{
  return (
    <div ref={ref}
     style=
         {{width:'200px',
            height:'100px',
            position:'absolute',
            padding:'10px',
            userSelect:'none',
            border:'1px solid black',
            left:`${initialPos?.x}px`,
            top:`${initialPos?.y}px`,
            cursor:'move',
            backgroundColor:'lightyellow'}}
            {...props}
    >📌{content}</div>
  )
});

export default Note