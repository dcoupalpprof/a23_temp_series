import { useState } from 'react';
import "./RatingSerie.css";

// Code inspiré de https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6

const RatingSerie = ({ rating, estCliquable }) => {
    if (!estCliquable) {
        const hover = rating / 2;
        return (
            <div className='rating'>
                <h4>Classement global</h4>
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
                <h4>Classement personnel</h4>
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
export default RatingSerie;