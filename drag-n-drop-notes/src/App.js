
import { useState } from 'react';
import './App.css';
import Notes from './components/Notes';

function App() {
  const [notes,setnotes]=useState([
    {id:1,title:"Note 1",content:"This is note 1"},
    {id:2,title:"Note 2",content:"This is note 2"},
    {id:3,title:"Note 3",content:"This is note 3"}
  ]);

  return (
    <div className="App">
    <Notes notes={notes} setnotes={setnotes}/>
    </div>
  );
}

export default App;
