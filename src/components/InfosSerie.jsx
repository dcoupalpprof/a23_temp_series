import BandeAnnonce from "./BandeAnnonce";
import RatingSerie from "./RatingSerie";
import "./InfosSerie.css";

const InfosSerie = ({ annee, imdb, synopsis, bandeAnnonce, rating, votes, langue, genres }) => (
    <section className="infosSerie">
        <div className="ratings">
            <RatingSerie rating={rating} votes={votes} estCliquable={false}></RatingSerie>
            <RatingSerie rating={rating} votes={votes} estCliquable={true}></RatingSerie>
        </div>
        <div className="separation">
            <h2>Synopsis</h2>
            <p><em>{synopsis}</em></p>
            <p className="majuscule grisPale">{annee} . {langue}</p>
        </div>
        <div className="separation">
            <h3>Genres</h3>
            {genres.map((g, i) => (
                <p key={g} className="premiereMajuscule grisPale">{genres[i]}</p>
            ))}
        </div>
        <div className="separation">
            <h3>Liens externes</h3>
            <a href={imdb}>{imdb}</a>
            <BandeAnnonce bandeAnnonce={bandeAnnonce}></BandeAnnonce>
        </div>
    </section>
);

export default InfosSerie;