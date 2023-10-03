import "./Favori.css";

const Favori = ({ serie, favoris, handleFavoriClick }) => {
    return (
        <div className="favori">
            <button data-cy="button_favori" type="button" className={favoris.find(favori => favori.id === serie.id) != undefined ? "on" : "off"} onClick={() => handleFavoriClick(serie)}>&#10084;</button>
        </div>
    );
};

export default Favori;