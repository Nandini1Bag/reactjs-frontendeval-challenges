import './App.css';
import Explorer from './components/Explorer';
import { data } from './components/constants/data';

function App() {
  return (
    <div className="App">
     <Explorer data={data}/>
    </div>
  );
}

export default App;
