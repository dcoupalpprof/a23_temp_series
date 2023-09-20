import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Profil from "./Profil";
import "./Nav.css";

const Nav = ({ liens, profil, handleSubmit, favoris }) => {
  const { pathname } = useLocation();
  let profilDeconnecte = {
    nom: "",
    mdp: "",
  }
  return (
    <nav>
      <ul>
        {liens.map(({ nom, url }) =>
          <li key={url} className={pathname.startsWith(url) ? "active" : ""}>
            <Link data-cy={`lien_${nom}`} to={url}>{nom}</Link>
          </li>
        )}
      </ul>
      <Profil profil={profil} favoris={favoris}></Profil>
      <button className='deconnexion' onClick={() => handleSubmit(profilDeconnecte)}>Déconnexion</button>
    </nav >
  );
};

export default Nav;