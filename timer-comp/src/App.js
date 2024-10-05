import './App.css';
import {React,useEffect,useState} from 'react';

function App() {

 const[isStart,setIsstart]=useState(false);
 const[isPaused,setisPaused]=useState(false);
 const [hour,sethour]=useState(0);
 const [minute,setminute]=useState(0);
 const [second,setsecond]=useState(0);
 const [timerId,settimerId]=useState(0);

 const  handleClick=()=>{
  if(hour<0|| minute<0 ||second<=0){
    alert("Invalid Time");
    return;
  }else{
    setIsstart(true);
  }  
  }

  const handlePause=()=>{
   setisPaused(true);
   clearInterval(timerId);
  }

  const handleResume=()=>{
    setisPaused(false);
    runtimer(second,minute,hour);
   }
const handleReset=()=>{
  setIsstart(false);
  resettimer();
}

const resettimer=()=>{
  sethour(0);
  setminute(0);
  setsecond(0);
  clearInterval(timerId);
}
  const handleonChange=(e)=>{
   const value=e.target.value;
   const id=e.target.id;
   if(id==='hours'){
   sethour(value);
   }else if(id==='minutes'){
    setminute(value);
   }else{
    setsecond(value);
   }
  }

  const runtimer=(sec,minute,hour,tid)=>{
    if(sec>0){
       setsecond((s)=>s-1)
    }else if(sec===0 && minute>0){
      setminute((m)=>m-1)
      setsecond(59);
    }else{
      sethour((h)=>h-1);
      setminute(59);
      setsecond(59);
    }

    if (sec===0 && minute===0 && hour===0){
     resettimer();
     alert('timer is finshed');
    }
  }

  useEffect(()=>{
    let tid;
if (isStart){
  tid= setInterval(()=>{
    runtimer(second,minute,hour,tid);
  },1000);
}
settimerId(tid); 
return(()=>{
  clearInterval(tid);
})
  },[isStart,hour,minute,second]);

  return (
    <div className="App">
      <h1>countdownTimer</h1> 
      {!isStart && <div className='input-container'>
       <div className='input-box'>
        <input id="hours" className='input' placeholder='HH'onChange={handleonChange}></input>
        <input id="minutes" className='input' placeholder='MM'onChange={handleonChange}></input>
        <input id="seconds" className='input' placeholder='SS' onChange={handleonChange}></input>
       </div>
      <button className='button'onClick={handleClick}>Start</button>
      </div>}
      {isStart && <div className='input-container'>
        <div className='timer-box'>
        <div>{hour >=10 ? hour:`0${hour}`}
         <span>:</span>
        </div>
        <div>{minute>=10 ? minute:`0${minute}`}
        <span>:</span>
        </div>
        <div>{second>=10 ? second:`0${second}`}
        </div>
       </div>
       <div className='action-box'>
        {!isPaused &&  
        <button className='button' onClick={handlePause}>Pause</button>
        }
         {isPaused &&  
        <button className='button' onClick={handleResume}>Resume</button>
        }
     
      <button className='button' onClick={handleReset}>Reset</button>
      </div>
      </div>
      }


    </div>
  );
}

export default App;
