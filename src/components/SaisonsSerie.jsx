import { useState } from 'react';
import Saison from "./Saison";
import "./SaisonsSerie.css";

const SaisonsSerie = ({ saisons }) => {
    const [estAffiche, setEstAffiche] = useState(false);
        return (
        <section className="saisons">
            <h2>Saisons</h2>
            <button type="button" className={estAffiche ? "on" : "off"} onClick={() => setEstAffiche(!estAffiche)}></button>
            <div className={estAffiche ? "" : "hidden"}>
                {saisons.map((s, i) => (
                    <Saison key={s.number} saison={s} numero={i}></Saison>
                ))}
            </div>
        </section>
    );
};

export default SaisonsSerie;