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
            <button type='submit' onClick={() => handleButtonClick()}>🔎︎</button>
        </div>
    )
};

export default EnginRecherche;