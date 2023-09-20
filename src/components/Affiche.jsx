import Favori from "./Favori";
import "./Affiche.css";

const Affiche = ({ affiche, serie, handleFavoriClick, favoris }) => (
    <div className="affiche">
        <img src={affiche} className="imgAffiche" />
        <Favori serie={serie} handleFavoriClick={handleFavoriClick} favoris={favoris} />
    </div>
);

export default Affiche;