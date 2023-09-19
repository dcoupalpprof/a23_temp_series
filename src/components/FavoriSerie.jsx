import { useState } from 'react';
import "./FavoriSerie.css";

const FavoriSerie = ({ serie, handleFavoriClick, mesFavoris }) => {

    return (
        <div className="favori">
            <button type="button" className={mesFavoris.includes(serie.id) ? "on" : "off"} onClick={() => handleFavoriClick({ serie })}>&#10084;</button>
        </div>
    );
};

export default FavoriSerie;