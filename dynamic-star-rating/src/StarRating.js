import React, { useState } from 'react';
import './StarRating.css'; // Create a CSS file for styling

const StarRating = ({ totalStars, onRatingChange, defaultRating = 0 }) => {
    const [rating, setRating] = useState(defaultRating);
    const [hover, setHover] = useState(0);

    const handleClick = (value) => {
        setRating(value);
        onRatingChange(value); // Pass the rating to the parent component
        // Generating an Array of Numbers
        // const numberArray = Array.from({ length: totalStars }, (_, index) => index + 1);
        // console.log(numberArray); // [1, 2, 3, 4, 5]
        // or you can use [...Array(totalStars)]
    };


    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                        key={starValue}
                        onClick={() => handleClick(starValue)}
                        onMouseOver={() => setHover(starValue)} // Set hover to current star
                        onMouseLeave={() => setHover(0)} // Reset hover on mouse leave
                        className="star-button"
                    >
                        <span
                            className={`star ${starValue <= (hover || rating) ? 'on' : 'off'}`}
                        >
                            &#9733; {/* Star character */}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;
