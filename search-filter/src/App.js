
import './App.css';
import { Data } from './data';
import { useState } from 'react';

function App() {
  const [inputValue,setinputValue]=useState('');

  const handleOnchange=(e)=>{
  setinputValue(e.target.value);
  }
  return (
    <div className="App">
      <div>
      <input type="text" value={inputValue} placeholder='Search' 
      onChange={handleOnchange}/>
      </div>    
      <div className='tabledata'>
        <table id='searchdata'>
          <thead>
            <th>
            <tr>FirstName</tr>
            </th>
            <th>
            <tr>LastName</tr>
            </th>
            <th>
              <tr>Email</tr>
            </th>         
          </thead>
          <tbody>
          {Data.filter((item)=>{
         return inputValue.toLowerCase()===''
         ?item
         :item.first_name.toLowerCase().includes(inputValue);
          }).map((item)=>{
           return(<tr key={item.id} >
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>) 
          })}
          </tbody>
        </table>
       
      </div>
    </div>
  );
}

export default App;
