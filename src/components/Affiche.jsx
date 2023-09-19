import FavoriSerie from "./FavoriSerie";
import "./Affiche.css";

const Affiche = ({ affiche, serie, handleFavoriClick, mesFavoris }) => (
    <div className="affiche">
        <img src={affiche} className="imgAffiche" />
        <FavoriSerie serie={serie} handleFavoriClick={handleFavoriClick} mesFavoris={mesFavoris} />
    </div>
);

export default Affiche;