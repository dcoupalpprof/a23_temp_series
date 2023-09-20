import { useState } from 'react';
import "./Rating.css";

// Code inspiré de https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6

const Rating = ({ rating, estCliquable }) => {
    if (!estCliquable) {
        const hover = rating / 2;
        return (
            <div className='rating'>
                <h3>Classement global</h3>
                <div>
                    {[...Array(5)].map((etoile, i) => {
                        i += 1;
                        return (
                            <button
                                key={i}
                                className={i <= (hover || rating) ? "on" : "off"}
                            >
                                <span>&#9733;</span>
                            </button>
                        );
                    })}
                    <p>{hover.toFixed(1)}/5</p>
                </div>
                <div>
                </div>
            </div>
        );
    } else {
        const [monRating, setRating] = useState(0);
        const [hover, setHover] = useState(0);
        return (
            <div className="rating">
                <h3>Classement personnel</h3>
                <div>
                    {[...Array(5)].map((etoile, i) => {
                        i += 1;
                        return (
                            <button
                                type="button"
                                key={i}
                                className={i <= (hover || monRating) ? "on cursor" : "off cursor"}
                                onClick={() => setRating(i)}
                                onMouseEnter={() => setHover(i)}
                                onMouseLeave={() => setHover(monRating)}
                            >
                                <span>&#9733;</span>
                            </button>
                        );
                    })}
                    <p>{monRating.toFixed(1)}/5</p>
                </div>
                <div>
                </div>
            </div>
        );
    }
};
export default Rating;