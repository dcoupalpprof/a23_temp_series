import "./Favori.css";

const Favori = ({ serie, handleFavoriClick, favoris }) => {
    return (
        <div className="favori">
            <button type="button" className={favoris.includes(serie.id) ? "on" : "off"} onClick={() => handleFavoriClick({ serie })}>&#10084;</button>
        </div>
    );
};

export default Favori;