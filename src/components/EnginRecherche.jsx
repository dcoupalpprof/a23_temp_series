import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EnginRecherche.css";

const EnginRecherche = ({ handleClick }) => {
    const navigate = useNavigate();
    const [inputRecherche, setInputRecherche] = useState("");
    function handleChange(event) {
        setInputRecherche(event.target.value);
    }
    function handleButtonClick() {
        handleClick(inputRecherche);
        if (inputRecherche.trim() !== "") navigate("/recherche");
    }
    return (
        <div className="recherche">
            <input
                data-cy="input_recherche"
                onChange={handleChange}
                value={inputRecherche}
                type="text"
                placeholder="Recherche"
            />
            <button data-cy="button_recherche" type='submit' className={inputRecherche.trim() === "" ? "off" : null} onClick={inputRecherche.trim() !== "" ? () => handleButtonClick() : null}>🔎︎</button>
        </div>
    )
};

export default EnginRecherche;