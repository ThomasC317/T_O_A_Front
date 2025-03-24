import { useEffect } from "react";
import { usePlayer, setLevel, SetApogeeLevel, setResource } from "../context/PlayerContext";

function usePlayerLevelUpdater() {
  const { state, dispatch } = usePlayer();

  useEffect(() => {

    if(state.village.xp >= state.village.requiredXpToLevelUp)
    {
      dispatch(setLevel(1));    
    }

  }, [state.village.xp,dispatch])

  const handleApogee = () => {
    dispatch(SetApogeeLevel(1)); 
  };

  return { handleApogee };
}

export default usePlayerLevelUpdater;