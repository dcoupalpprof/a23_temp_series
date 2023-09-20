import Favori from "./Favori";
import "./Affiche.css";

const Affiche = ({ affiche, serie, favoris, handleFavoriClick }) => (
    <div className="affiche">
        <img src={affiche} className="imgAffiche" />
        <Favori serie={serie} favoris={favoris} handleFavoriClick={handleFavoriClick} />
    </div>
);

export default Affiche;