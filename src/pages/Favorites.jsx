import { Outlet } from "react-router-dom";
import "./Liste.css";
import ListeSeries from "./ListeSeries";

const Favorites = ({ favoris }) => {
    if (favoris.length > 0) {
        return (
            <>
                <Outlet></Outlet>
                <div className='listeSeries'>
                    <ListeSeries series={favoris} lien="favorites"></ListeSeries>
                </div>
            </>
        )
    }
    else {
        return (
            <div className="erreur">
                Vous n'avez pas encore de séries favorites. Faites une recherche ou visitez les séries populaires pour en découvrir!
            </div>
        )
    }
}
export default Favorites;