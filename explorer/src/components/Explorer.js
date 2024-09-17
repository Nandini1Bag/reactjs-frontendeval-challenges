import React, { useState } from 'react'

function Explorer({data}) {
    const [Expand ,isExpand]=useState(false);
  return (
    <div>
    <p style={{cursor:'pointer',display:'flex',alignItems:'center'}}
    onClick={()=>isExpand((prevstate)=>!prevstate)}>
    {data.isFolder?Expand?'🔽':'▶️':null}
    {data.name}
    </p>   
    <div style={Expand?{display:'block'}:{display:'none'}}>
        {data.isFolder &&
        (<div style={{marginLeft:15}}>{data.items.map((ele)=>
        <Explorer key={ele.name} data={ele}/>
        )}</div>)
        }
    </div>    
    </div>
  )
}

export default Explorer