import React, { useState } from 'react';
import StarRating from './StarRating';

const App = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        console.log('Selected Rating:', newRating); // Process the rating further if needed
    };

    return (
        <div>
            <h1>Rate Us!</h1>
            <StarRating totalStars={5} onRatingChange={handleRatingChange} defaultRating={0} />
            <p>Your Rating: {rating}</p>
        </div>
    );
};

export default App;

//Next do  Half-Star Rating