import Serie from "./Serie";
import ListeSeries from "./ListeSeries";
import Profil from "./Profil";
import series from "../data/series_etape2_details.json";
import listeSeries from "../data/series_etape2_list.json";
import { useState } from 'react';
import "./App.css";

const App = () => {
    const [listeSelectionnee, setListeSelectionnee] = useState("");
    const [mesFavoris, setFavoris] = useState([]);
    const profils = [
        {
            photo: "https://i.pravatar.cc/300",
            nom: "Patate2000",
            seriesAimees: mesFavoris.length
        }
    ];
    const handleFavoriClick = (e) => {
        if (mesFavoris.includes(e.serie.id)) {
            setFavoris(mesFavoris => mesFavoris.filter((f) => {
                return f !== e.serie.id;
            }));
        }
        else {
            setFavoris(mesFavoris => [...mesFavoris, e.serie.id]);
        }
    }
    return (
        <main>
            {listeSelectionnee !== "" ? <Serie serie={series[listeSelectionnee.toString()]} saisons={series[listeSelectionnee.toString()].seasons} handleFavoriClick={handleFavoriClick} mesFavoris={mesFavoris}></Serie> : ""}
            <div className="listeSeries">
                <ListeSeries listeSeries={listeSeries} selectionnee={listeSelectionnee} setListeSelectionnee={setListeSelectionnee} estFavori={false} mesFavoris={mesFavoris}></ListeSeries>
            </div>
            <Profil profil={profils[0]}></Profil>
            <h1>Séries favorites</h1>
            <div className="listeSeries listeSeriesFavorites">
                <ListeSeries listeSeries={listeSeries} selectionnee={listeSelectionnee} setListeSelectionnee={setListeSelectionnee} estFavori={true} mesFavoris={mesFavoris}></ListeSeries>
            </div>
        </main>
    );
};

export default App;