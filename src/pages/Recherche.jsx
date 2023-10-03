import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import EnginRecherche from "../components/EnginRecherche";
import "./Liste.css";

const Recherche = ({ recherche, handleClick }) => {
    if (recherche === "") {
        recherche = "api series search no result";
    }
    const [series, setSeries] = useState([]);
    let { pathname } = useLocation();
    pathname = pathname.replace("/recherche/", "");
    useEffect(() => {
        const fetchSeries = async () => {
            const resp = await fetch("http://localhost:3000/api/series/search?q=" + recherche);
            const data = await resp.json();
            setSeries(data.series);
        };
        fetchSeries()
    }, [recherche]);
    if (series.length > 0) {
        return (
            <>
                <Outlet></Outlet>
                <div className='listeSeries'>
                    {
                        series.map(({ id, poster, title, year, imdb }) => (
                            <div key={id} className={id.toString() === pathname ? "on" : "off"}>
                                <img src={poster} className="imgAffiche" />
                                <div>
                                    <h2>{title}</h2>
                                    <p>{year}</p>
                                    <a href={imdb}>IMDB</a>
                                    <Link className="lien_details" to={`/recherche/${id}`}>Détails</Link>
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
            <>
                <div className="erreur">
                    Veuillez entrer du contenu dans la barre de recherche pour continuer.
                </div>
                <div className="rechercheImbriquee">
                    <EnginRecherche handleClick={handleClick}></EnginRecherche>
                </div>
            </>
        )
    }
}
export default Recherche;