import { useEffect } from "react";
import { usePlayer, setLevel, SetApogeeLevel, setResource } from "../context/PlayerContext";

function usePlayerLevelUpdater() {
  const { state, dispatch } = usePlayer();

  useEffect(() => {

    if(state.playerStats.xp >= state.playerStats.requiredXpForLevelUp)
    {
      dispatch(setLevel(1));    
    }

  }, [state.playerStats.xp,dispatch])

  const handleApogee = () => {
    dispatch(SetApogeeLevel(1)); 
  };

  return { handleApogee };
}

export default usePlayerLevelUpdater;