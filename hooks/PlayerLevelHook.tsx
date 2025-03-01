import { useEffect } from "react";
import { usePlayer, setLevel, setXp, setXpForLevelUp, SetApogeeLevel, ResetFarmersAndServants, setFarmerMaxLevel, setPlayerStats, SetServantStatsMultiplier, setResource, SetStatsPoints, resetItems, SetMaxResource } from "../context/PlayerContext";

function usePlayerLevelUpdater() {
  const { state, dispatch } = usePlayer();

  useEffect(() => {

    if(state.playerStats.xp >= state.playerStats.requiredXpForLevelUp)
    {
      dispatch(setLevel(1));
      dispatch(setXp(-state.playerStats.requiredXpForLevelUp));
      const requiredXpForLevelUp = Math.round(state.playerStats.requiredXpForLevelUp * Math.pow(state.playerStats.requiredXpForLevelUpMultiplier, state.playerStats.level));
      dispatch(setXpForLevelUp(requiredXpForLevelUp));
      dispatch(SetStatsPoints(5))
      

    }

  }, [state.playerStats.xp,dispatch])

  const handleApogee = () => {
    dispatch(SetApogeeLevel(1)); 
    dispatch(resetItems()); 
    dispatch(ResetFarmersAndServants()); 
    dispatch(SetMaxResource(state.playerStats.maxResource + (50/100 * state.playerStats.maxResource)));

    dispatch(setPlayerStats(state.playerStats.stats,"add")); 
    dispatch(setFarmerMaxLevel(20)); 
    dispatch(SetServantStatsMultiplier(2)); 
    dispatch(setLevel(-(state.playerStats.level -1))); 
    dispatch(setXp(-state.playerStats.xp)); 
    dispatch(setResource(-state.playerStats.resource));

    // const newRequiredXpForLevelUp = Math.round(
    //   state.playerStats.requiredXpForLevelUp *
    //   Math.pow(state.playerStats.requiredXpForLevelUpMultiplier, 1)
    // );
    // dispatch(setXpForLevelUp(newRequiredXpForLevelUp));
  };

  return { handleApogee };
}

export default usePlayerLevelUpdater;