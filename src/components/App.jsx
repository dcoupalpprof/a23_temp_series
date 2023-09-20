import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, Trending, Favorites, DetailsSerie } from "../pages";
import { useState } from 'react';
import listeSeries from "../data/series_etape2_list.json";
import LayoutAuthentifie from "./LayoutAuthentifie";
import Layout from "./Layout";
import "./App.css";

const App = () => {
    const [favoris, setFavoris] = useState([]);
    const rand = Math.round(1 + Math.random() * (5 - 1));
    const photoProfil = "/img/photoProfil" + rand + ".jpg";
    //Fait l'inverse? :(
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
    function handleSubmit(newProfil) {
        setProfil(profil => {
            return {
                ...profil,
                nom: newProfil.nom,
                mdp: newProfil.mdp
            };
        });
    }
    const routesAuthentifiees = [
        {
            path: '',
            element: <LayoutAuthentifie profil={profil} handleSubmit={handleSubmit} favoris={favoris} />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/trending" replace />,
                },
                {
                    path: 'trending',
                    element: <Trending listeSeries={listeSeries} />,
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
                    element: <Favorites listeSeries={listeSeries} favoris={favoris} />,
                    children: [
                        {
                            path: ':id',
                            element: <DetailsSerie favoris={favoris} handleFavoriClick={handleFavoriClick} />,
                            errorElement: <Navigate to="/favorites" replace />
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
    return <RouterProvider router={createBrowserRouter(profil.nom.trim() !== "" && profil.mdp.trim() !== "" ? routesAuthentifiees : routes)} />;
};

export default App;