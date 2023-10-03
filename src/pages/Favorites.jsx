import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Liste.css";

const Favorites = ({ favoris }) => {
    let { pathname } = useLocation();
    pathname = pathname.replace("/favorites/", "");
    if (favoris.length > 0) {
        return (
            <>
                <Outlet></Outlet>
                <div className='listeSeries'>
                    {
                        favoris.map(({ id, poster, title, year, imdb }) => (
                            <div key={id} className={id.toString() === pathname ? "on" : "off"} >
                                <img src={poster} className="imgAffiche" />
                                <div>
                                    <h2>{title}</h2>
                                    <p>{year}</p>
                                    <a href={imdb}>IMDB</a>
                                    <Link className="lien_details" to={`/favorites/${id}`}>Détails</Link>
                                </div>
                            </div>
                        ))
                    }
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