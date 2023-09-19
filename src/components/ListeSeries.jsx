import { useState } from 'react';
import "./ListeSeries.css";

const ListeSeries = ({ listeSeries, selectionnee, setListeSelectionnee, estFavori, mesFavoris }) => {
    const listeFavoris = [];
    if (!estFavori) {
        return (<>
            {
                listeSeries.map((s) => (
                    <div key={s.id} className={selectionnee === s.id ? "on" : "off"} onClick={() => setListeSelectionnee(s.id)}>
                        <img src={s.poster} className="imgAffiche" />
                        <div>
                            <h2>{s.title}</h2>
                            <p>{s.year}</p>
                            <a href={s.imdb}>IMDB</a>
                        </div>
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
                        <img src={s.poster} className="imgAffiche" />
                        <div>
                            <h2>{s.title}</h2>
                            <p>{s.year}</p>
                            <a href={s.imdb}>IMBD</a>
                        </div>
                    </div>
                ))
            }
        </>)
    }
};

export default ListeSeries;