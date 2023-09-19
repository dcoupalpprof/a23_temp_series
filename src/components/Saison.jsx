import "./Saison.css";

const Saison = ({ saison, numero }) => (
    <article className="saison">
        <h3>Saison {numero + 1}</h3>
        <p>{saison.episodes.length} épisodes</p>
    </article>
);

export default Saison;