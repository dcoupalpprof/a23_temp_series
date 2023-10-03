import { useState } from 'react';
import "./Login.css"

const Login = ({ handleSubmit }) => {
    let erreur = "";
    const [newProfil, setNewProfil] = useState({
        nom: "",
        mdp: "",
    });
    function handleNomChange(event) {
        setNewProfil((current => {
            return {
                ...current,
                nom: event.target.value
            };
        }));
    }
    function handleMDPChange(event) {
        setNewProfil((current => {
            return {
                ...current,
                mdp: event.target.value
            };
        }));
    }
    function handleErreur() {
        if (newProfil.nom.trim() === "" && newProfil.mdp.trim() !== "") {
            erreur = "Veuillez entrer un nom d'utilisateur pour continuer.";
        }
        else if (newProfil.nom.trim() !== "" && newProfil.mdp.trim() === "") {
            erreur = "Veuillez entrer un mot de passe pour continuer.";
        }
    }
    return (
        <div className='login'>
            <h1>Authentification</h1>
            <div className='form'>
                <div>
                    <label>Nom d'utilisateur</label>
                    <input
                        data-cy="input_nom"
                        onChange={handleNomChange}
                        value={newProfil.nom}
                        type="text"
                        autoFocus
                        placeholder="Nom d'utilisateur"
                    />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input
                        data-cy="input_mdp"
                        onChange={handleMDPChange}
                        value={newProfil.mdp}
                        type="text"
                        placeholder="Mot de passe"
                    />
                </div>
                <div>
                    <button data-cy="button_connexion" type='submit' className={newProfil.nom.trim() === "" && newProfil.mdp.trim() === "" ? "off" : null}
                        onClick={newProfil.nom.trim() !== "" && newProfil.mdp.trim() !== "" ? () => handleSubmit(newProfil.nom, false) : handleErreur()}>Envoyer</button>
                </div>
                <div className={erreur.trim() === "" ? "none" : "erreur"}>
                    {erreur}
                </div>
            </div>
        </div>
    );
};

export default Login;
