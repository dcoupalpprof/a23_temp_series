import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Layout;