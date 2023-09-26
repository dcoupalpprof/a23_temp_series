import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import HeaderSerie from "../components/HeaderSerie";
import Info from "../components/Info";
import Saisons from "../components/Saisons";
import "./DetailsSerie.css";

const DetailsSerie = ({ favoris, handleFavoriClick }) => {
    const params = useParams();
    const [serie, setSerie] = useState();
    useEffect(() => {
        const fetchSerie = async () => {
            const resp = await fetch("http://localhost:3000/api/series/" + params.id);
            const data = await resp.json();
            setSerie(data.serie);
        };
        fetchSerie();
    }, [params]);
    if (!serie) {
        return false;
    }
    return (
        <div className="serie">
            <HeaderSerie titre={serie.title} slogan={serie.tagline} reseau={serie.network} pays={serie.country} status={serie.status} affiche={serie.poster} serie={serie} favoris={favoris} handleFavoriClick={handleFavoriClick} />
            <div className="informations">
                <Info annee={serie.year} imdb={serie.imdb} synopsis={serie.overview} bandeAnnonce={serie.trailer} rating={serie.rating} votes={serie.votes} langue={serie.language} genres={serie.genres} />
                <Saisons saisons={serie.seasons} />
            </div>
        </div>
    )
};

export default DetailsSerie;