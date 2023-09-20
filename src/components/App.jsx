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
    const [profil, setProfil] = useState({
        photo: photoProfil,
        nom: "",
        mdp: "",
        seriesAimees: favoris.length
    });
    //Ne fonctionne plus? :(
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
                    element: <Login handleSubmit={handleSubmit} profil={profil} setProfil={setProfil} />
                },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/login" replace />,
        }
    ];
    const routesAuthentifiees = [
        {
            path: '',
            element: <LayoutAuthentifie profil={profil} handleDisconnect={handleDisconnect} />,
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
                            element: <DetailsSerie handleFavoriClick={handleFavoriClick} favoris={favoris} />,
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
                            element: <DetailsSerie handleFavoriClick={handleFavoriClick} favoris={favoris} />,
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
    //Ne se met pas à jour? :(
    function handleSubmit(newProfil) {
        if (newProfil.nom.trim() !== "" && newProfil.mdp.trim() !== "") {
            setProfil(profil => {
                return {
                    ...profil,
                    nom: newProfil.nom,
                    mdp: newProfil.mdp
                };
            });
            setEstAuthentifie(routesAuthentifiees);
        }
    }
    function handleDisconnect() {
        setEstAuthentifie(routes);
    }
    const [estAuthentifie, setEstAuthentifie] = useState(routes);
    return <RouterProvider router={createBrowserRouter(estAuthentifie)} />;
};

export default App;