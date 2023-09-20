import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const LayoutAuthentifie = ({profil, handleSubmit, favoris}) => {
    return (
        <>
            <Nav
                liens={[
                    { nom: "Populaires", url: "/trending" },
                    { nom: "Favoris", url: "/favorites" },
                ]}
                profil={profil}
                handleSubmit={handleSubmit}
                favoris={favoris}
            />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default LayoutAuthentifie;