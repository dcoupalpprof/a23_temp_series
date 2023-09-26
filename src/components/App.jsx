import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, Trending, Recherche, Favorites, DetailsSerie } from "../pages";
import { useState } from 'react';
import LayoutAuthentifie from "./LayoutAuthentifie";
import Layout from "./Layout";
import "./App.css";

const App = () => {
    const [favoris, setFavoris] = useState([]);
    const [recherche, setRecherche] = useState("");
    const rand = Math.round(1 + Math.random() * (5 - 1));
    const photoProfil = "/img/photoProfil" + rand + ".jpg";
    const handleFavoriClick = (e) => {
        if (favoris.includes(e.serie.id)) {
            setFavoris(favoris => favoris.filter((f) => {
                return f !== e.serie.id;
            }));
        }
        else {
            setFavoris(favoris => [...favoris, e.serie.id]);
        }
    }
    const [profil, setProfil] = useState({
        photo: photoProfil,
        nom: "",
        mdp: "",
        seriesAimees: favoris.length
    });
    function handleSubmit(newProfil, deconnexion) {
        if (newProfil.mdp || deconnexion) {
            setProfil(profil => {
                return {
                    ...profil,
                    nom: newProfil.nom,
                    mdp: newProfil.mdp,
                };
            });
        }
    }
    function handleClick(inputRecherche) {
        setRecherche(inputRecherche);
        console.log(recherche);
    }
    const routesAuthentifiees = [
        {
            path: '',
            element: <LayoutAuthentifie profil={profil} handleSubmit={handleSubmit} favoris={favoris} handleClick={handleClick} />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/trending" replace />,
                },
                {
                    path: 'trending',
                    element: <Trending />,
                    children: [
                        {
                            path: ':id',
                            element: <DetailsSerie favoris={favoris} handleFavoriClick={handleFavoriClick} />,
                            errorElement: <Navigate to="/trending" replace />
                        },
                    ]
                },
                {
                    path: 'favorites',
                    element: <Favorites favoris={favoris} />,
                    children: [
                        {
                            path: ':id',
                            element: <DetailsSerie favoris={favoris} handleFavoriClick={handleFavoriClick} />,
                            errorElement: <Navigate to="/favorites" replace />
                        },
                    ]
                },
                {
                    path: 'recherche',
                    element: <Recherche recherche={recherche} />,
                    children: [
                        {
                            path: ':id',
                            element: <DetailsSerie favoris={favoris} handleFavoriClick={handleFavoriClick} />,
                            errorElement: <Navigate to="/recherche" replace />
                        },
                    ]
                },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/trending" replace />,
        }
    ];
    const routes = [
        {
            path: '',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/login" replace />,
                },
                {
                    path: 'login',
                    element: <Login profil={profil} setProfil={setProfil} handleSubmit={handleSubmit} />
                },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/login" replace />,
        }
    ];
    return <RouterProvider router={createBrowserRouter(!!profil.nom ? routesAuthentifiees : routes)} />;
};

export default App;