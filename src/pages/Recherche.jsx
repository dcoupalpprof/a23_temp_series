import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import EnginRecherche from "../components/EnginRecherche";
import ListeSeries from "./ListeSeries";
import "./Liste.css";

const Recherche = ({ recherche, handleClick }) => {
    if (recherche === "") {
        recherche = "api series search no result";
    }
    const [series, setSeries] = useState([]);
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
                    <ListeSeries series={series} lien="recherche"></ListeSeries>
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