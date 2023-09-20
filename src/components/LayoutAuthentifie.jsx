import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const LayoutAuthentifie = ({profil, handleDisconnect}) => {
    return (
        <>
            <Nav
                liens={[
                    { nom: "Populaires", url: "/trending" },
                    { nom: "Favoris", url: "/favorites" },
                ]}
                profil={profil}
                handleDisconnect={handleDisconnect}
            />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default LayoutAuthentifie;