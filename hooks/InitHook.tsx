import { useEffect } from "react";
import { usePlayer } from "../context/PlayerContext"; // Ajuste le chemin selon ton projet
import { loadVillage } from "../context/PlayerContext"; // Fonction pour charger le village depuis ton contexte

export const useInitGame = () => {
const { state, dispatch } = usePlayer();

  useEffect(() => {
  
    const initializeGame = async () => {
      console.log("init ????")
      try {
        const villageId = 1;
        await loadVillage(villageId, dispatch);
      } catch (error) {
        console.error("Erreur lors de l'initialisation du village :", error);
      }
    };

    initializeGame();
  }, [dispatch]); 

  useEffect(() => {
    console.log("updating village !!!! "+ state.village.name)
  }, [state.village]);

};