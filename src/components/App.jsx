import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, Trending, Recherche, Favorites, DetailsSerie } from "../pages";
import { useStorage } from "../hooks/useStorage";
import { useState, useEffect } from 'react';
import LayoutAuthentifie from "./LayoutAuthentifie";
import Layout from "./Layout";
import "./App.css";

const App = () => {
    //Profil
    const rand = Math.round(1 + Math.random() * (5 - 1));
    const photoProfil = "/img/photoProfil" + rand + ".jpg";
    const { saveToStorage, getFromStorage } = useStorage("series-");
    const [profil, setProfil] = useState({
        photo: photoProfil,
        nom: "",
    });
    const profilSauvegarde = getFromStorage('profil');
    useEffect(() => {
        if (profilSauvegarde) {
            setProfil(profil => {
                const monProfilSauvegarde = {
                    ...profil,
                    photo: profilSauvegarde.photo,
                    nom: profilSauvegarde.nom,
                };
                return monProfilSauvegarde;
            });
        }
    }, []);
    function handleSubmit(nomProfil, deconnexion) {
        if (nomProfil || deconnexion) {
            setProfil(profil => {
                const monProfil = {
                    ...profil,
                    nom: nomProfil,
                    photo: photoProfil
                };
                saveToStorage('profil', monProfil);
                return monProfil;
            });
            setFavoris(favoris => {
                const mesFavoris = [];
                saveToStorage('favoris', mesFavoris)
                return mesFavoris;
            });

        }
    }
    //Favoris
    const [favoris, setFavoris] = useState([]);
    const FavorisSauvegardes = getFromStorage('favoris');
    useEffect(() => {
        if (FavorisSauvegardes) {
            setFavoris(FavorisSauvegardes);
        }
    }, []);
    const handleFavoriClick = (serie) => {
        if (favoris.find(favori => favori.id === serie.id) != undefined) {
            setFavoris(favoris => {
                const mesFavoris = favoris.filter((f) => {
                    return f.id !== serie.id;
                })
                saveToStorage('favoris', mesFavoris);
                return mesFavoris;
            });
        }
        else {
            setFavoris(favoris => {
                const mesFavoris = [...favoris, serie];
                saveToStorage('favoris', mesFavoris);
                return mesFavoris;
            });
        }

    }
    //Recherche
    const [recherche, setRecherche] = useState("");
    function handleClick(inputRecherche) {
        setRecherche(inputRecherche);
    }
    const routesAuthentifiees = [
        {
            path: '',
            element: <LayoutAuthentifie favoris={favoris} profil={profil} handleSubmit={handleSubmit} handleClick={handleClick} />,
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
                    element: <Recherche recherche={recherche} handleClick={handleClick} />,
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
                    element: <Login setProfil={setProfil} handleSubmit={handleSubmit} />
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