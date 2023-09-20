import Affiche from "./Affiche";
import "./HeaderSerie.css";

const HeaderSerie = ({ titre, slogan, reseau, pays, status, affiche, serie, handleFavoriClick, favoris }) => {
  switch (status) {
    case "returning series":
      status = "Série de retour";
      break;
    case "continuing":
      status = "Continue";
      break;
    case "in production":
      status = "En production";
      break;
    case "planned":
      status = "Prévue";
      break;
    case "upcoming":
      status = "À venir";
      break;
    case "pilot":
      status = "Pilote";
      break;
    case "canceled":
      status = "Annulée";
      break;
    default:
      status = "Terminée";
  }
  ; return (
    <header className="fondPale">
      <div className="entete">
        <h1>{titre}</h1>
        <p><em>{slogan}</em></p>
        <p className="grisPale"><span className="majuscule">{reseau} . {pays}</span> . {status}</p>
      </div>
      <Affiche affiche={affiche} serie={serie} handleFavoriClick={handleFavoriClick} favoris={favoris} />
    </header>
  );
};

export default HeaderSerie;