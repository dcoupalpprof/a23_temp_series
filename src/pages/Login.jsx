import { useState } from 'react';
import "./Login.css"

const Login = ({ handleSubmit, profil }) => {
    const [newProfil, setNewProfil] = useState({
        nom: profil.nom,
        mdp: profil.mdp,
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
    return (
        <div className='login'>
            <h1>Authentification</h1>
            <form onSubmit={() => handleSubmit(newProfil)}>
                <div>
                    <label>Nom d'utilisateur</label>
                    <input
                        data-cy="input_nom"
                        onChange={handleNomChange}
                        value={newProfil.nom}
                        type="text"
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
                    <button type='submit'>Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
