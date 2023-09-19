import { useState } from 'react';
import "./ListeSeries.css";

const ListeSeries = ({ listeSeries, selectionnee, setListeSelectionnee, estFavori, mesFavoris }) => {
    const listeFavoris = [];
    if (!estFavori) {
        return (<>
            {
                listeSeries.map((s) => (
                    <div key={s.id} className={selectionnee === s.id ? "on" : "off"} onClick={() => setListeSelectionnee(s.id)}>
                        <h2>{s.title}</h2>
                        <p>{s.year}</p>
                        <a href={s.imdb}>{s.imdb}</a>
                        <img src={s.poster} className="imgAffiche" />
                    </div>
                ))
            }
        </>)
    }
    else {
        {
            listeSeries.map((s) => (
                mesFavoris.includes(s.id) ? listeFavoris.push(s) : null
            ))
        }
        return (<>
            {
                listeFavoris.map((s) => (
                    <div key={s.id} className={selectionnee === s.id ? "on" : "off"} onClick={() => setListeSelectionnee(s.id)}>
                        <h2>{s.title}</h2>
                        <p>{s.year}</p>
                        <a href={s.imdb}>{s.imdb}</a>
                        <img src={s.poster} className="imgAffiche" />
                    </div>
                ))
            }
        </>)
    }
};

export default ListeSeries;