import BandeAnnonce from "./BandeAnnonce";
import Rating from "./Rating";
import "./Info.css";

const Info = ({ annee, imdb, synopsis, bandeAnnonce, rating, votes, langue, genres }) => (
    <section className="info">
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
            <Rating rating={rating} votes={votes} estCliquable={false}></Rating>
            <Rating rating={rating} votes={votes} estCliquable={true}></Rating>
        </div>
        <div className="fondPale">
            <h3>Liens externes</h3>
            <a target="_blank" href={imdb}>Ouvrir le lien sur IMDB</a>
            <BandeAnnonce bandeAnnonce={bandeAnnonce}></BandeAnnonce>
        </div>
    </section>
);

export default Info;