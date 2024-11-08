import { useState } from 'react';
import './App.css';

function App() {

  const [ratings,setratings]=useState(
    [false,false,false,false,false]);

  const handleCheckboxChange=(index)=>{
    const newRating=[...ratings];
    newRating[index]=!newRating[index];
    setratings(newRating);
  }
  return (
    <div className="star-rating">
      <div className="stars">
        {ratings.map((isChecked, index) => (
          <label key={index} className="star">
            <input type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            ★
          </label>
        ))}
      </div>
      <div>
        <p>Selected Ratings:{" "}
          {ratings
            .map((checked, index) => (checked ? index + 1 : null))
            .filter(Boolean)
            .join(", ")}
        </p>
      </div>
      </div>
  );
}


export default App;
