import { MdFavorite } from "react-icons/md";
import "./Profil.css";

const Profil = ({ profil, favoris }) => {
    profil.seriesAimees = favoris.length;
    return (<>
        <div className="profil">
            <img src={profil.photo} className="imgAffiche" />
            <h1>{profil.nom}</h1>
            <p>{favoris.length} <MdFavorite /></p>
        </div>
    </>)
};

export default Profil;