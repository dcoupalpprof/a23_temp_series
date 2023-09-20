import { MdFavorite } from "react-icons/md";
import "./Profil.css";

const Profil = ({ profil }) => {
    return (<>
        <div className="profil">
            <img src={profil.photo} className="imgAffiche" />
            <h1>{profil.nom}</h1>
            <p>{profil.seriesAimees} <MdFavorite /></p>
        </div>
    </>)
};

export default Profil;