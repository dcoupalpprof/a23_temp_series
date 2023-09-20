import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Profil from "./Profil";
import "./Nav.css";

const Nav = ({ liens, profil, handleDisconnect }) => {
  const {pathname} = useLocation();
  return (
    <nav>
      <ul>
        {liens.map(({ nom, url }) =>
          <li key={url} className={pathname.startsWith(url) ? "active" : ""}>
            <Link data-cy={`lien_${nom}`} to={url}>{nom}</Link>
          </li>
        )}
      </ul>
      <Profil profil={profil}></Profil>
      <button onClick={() => handleDisconnect()}>Déconnexion</button>
    </nav >
  );
};

export default Nav;