import BandeAnnonce from "./BandeAnnonce";
import RatingSerie from "./RatingSerie";
import "./InfosSerie.css";

const InfosSerie = ({ annee, imdb, synopsis, bandeAnnonce, rating, votes, langue, genres }) => (
    <section className="infosSerie">
        <div>
            <h2>Synopsis</h2>
            <p><em>{synopsis}</em></p>
            <p className="majuscule grisPale">{annee} . {langue}</p>
        </div>
        <div className="fondPale">
            <h3>Genres</h3>
            <ul>
                {genres.map((g, i) => (
                    <li key={g} className="premiereMajuscule grisPale">{genres[i]}</li>
                ))}
            </ul>
        </div>
        <div>
            <RatingSerie rating={rating} votes={votes} estCliquable={false}></RatingSerie>
            <RatingSerie rating={rating} votes={votes} estCliquable={true}></RatingSerie>
        </div>
        <div className="fondPale">
            <h3>Liens externes</h3>
            <a href={imdb}>Ouvrir le lien sur IMDB</a>
            <BandeAnnonce bandeAnnonce={bandeAnnonce}></BandeAnnonce>
        </div>
    </section>
);

export default InfosSerie;