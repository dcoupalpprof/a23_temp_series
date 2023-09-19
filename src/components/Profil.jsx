import { MdFavorite } from "react-icons/md";
import "./Profil.css";

const Profil = ({ profil }) => {
    let pluriel = profil.seriesAimees > 1 ? "s" : ""
    return (<>
        <div className="profil">
            <div>
                <h1>{profil.nom}</h1>
                <p>{profil.seriesAimees} série{pluriel} <MdFavorite /></p>
            </div>
            <img src={profil.photo} className="imgAffiche" />
        </div>
    </>)
};

export default Profil;