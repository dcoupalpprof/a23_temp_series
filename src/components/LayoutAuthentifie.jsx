import { Outlet } from "react-router-dom";
import EnginRecherche from "./EnginRecherche";
import Footer from "./Footer";
import Nav from "./Nav";

const LayoutAuthentifie = ({ profil, handleSubmit, favoris, handleClick }) => {
    return (
        <>
            <Nav
                liens={[
                    { nom: "Populaires", url: "/trending" },
                    { nom: "Favoris", url: "/favorites" },
                    { nom: "Recherche", url: "/recherche" },
                ]}
                profil={profil}
                handleSubmit={handleSubmit}
                favoris={favoris}
            />
            <EnginRecherche handleClick={handleClick}></EnginRecherche>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default LayoutAuthentifie;