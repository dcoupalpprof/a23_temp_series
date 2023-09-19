import EnteteSerie from "./EnteteSerie";
import InfosSerie from "./InfosSerie";
import SaisonsSerie from "./SaisonsSerie";
import "./Serie.css";

const Serie = ({ serie, saisons, handleFavoriClick, mesFavoris }) => (
    <div className="serie">
        <EnteteSerie titre={serie.title} slogan={serie.tagline} reseau={serie.network} pays={serie.country} status={serie.status} affiche={serie.poster} serie={serie} handleFavoriClick={handleFavoriClick} mesFavoris={mesFavoris} />
        <div className="informations">
            <InfosSerie annee={serie.year} imdb={serie.imdb} synopsis={serie.overview} bandeAnnonce={serie.trailer} rating={serie.rating} votes={serie.votes} langue={serie.language} genres={serie.genres} />
            <SaisonsSerie saisons={saisons} />
        </div>
    </div>
);

export default Serie;