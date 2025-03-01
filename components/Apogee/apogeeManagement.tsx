"use client"
import { usePlayer } from '@/context/PlayerContext';
import usePlayerLevelUpdater from '@/hooks/PlayerLevelHook';
import React, { useState } from 'react';

// Composant principal
const ApogeeLevel = () => {
    const [showAscensionMessage, setShowAscensionMessage] = useState(false);
    const { handleApogee } = usePlayerLevelUpdater();
    const { state, dispatch } = usePlayer();
    const handleAscensionClick = () => {
        setShowAscensionMessage(true);
    };

    return (
        <div style={styles.container}>
            <h2>Apogée Niveau {state.playerStats.apogeeLevel + 1}</h2>

            <p>
                Vous avez atteint l'Apogée de votre aventure au niveau 50 !
                Vous ne gagnerez plus d'xp mais vous continurez a générer des ressources.
                Il est maintenant temps de faire votre <strong>Ascension</strong> !
            </p>

            <p>
                Bonus d'apogée actuel :<br/>
                - Niveau max des villageois : {state.farmerStats.farmersMaxLevel} <br/>
                - Arcanum max : {state.playerStats.maxResource}<br/>
            </p>

            <button style={styles.button} onClick={handleAscensionClick}>
                Lancer l'Ascension
            </button>

            {showAscensionMessage && (
                <div style={styles.ascensionMessage}>
                    <h3>Ascension disponible</h3>
                    <p>
                        En effectuant l'Ascension, vous allez réinitialiser vos éléments suivants :
                    </p>
                    <ul>
                        <li>Votre stuff</li>
                        <li>Vos villageois</li>
                        <li>Vos serviteurs</li>
                    </ul>
                    <p>
                        Cependant, vous gagnerez les avantages suivants :
                    </p>
                    <ul>
                        <li>Statistiques gagnées multipliées par 2</li>
                        <li>Niveau maximum de villageois +20</li>
                        <li>Statistiques des serviteurs multipliées par 2</li>
                        <li>Ressource maximale augmentée de 50%</li>
                    </ul>
                    <button style={styles.confirmButton}  onClick={handleApogee}>
                        Confirmer l'Ascension
                    </button>
                </div>
            )}
        </div>
    );
};

export default ApogeeLevel;

// Styles en objet JavaScript
const styles = {
    container: {
        textAlign: 'center',
        margin: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    ascensionMessage: {
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    confirmButton: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    }
};
