import { useEffect, useMemo } from "react";
import {
  usePlayer,
  setResource,
  setTotalResource,
  setXp,
  SetPassiveResource,
} from "../context/PlayerContext";

function usePlayerStatsUpdater() {
  const { state, dispatch } = usePlayer();

  // Memoize the intelligence and strength stats
  const intelligence = useMemo(
    () => state.playerStats.stats.intelligence,
    [state.playerStats.stats.intelligence]
  );
  const strength = useMemo(
    () => state.playerStats.stats.strength,
    [state.playerStats.stats.strength]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let passiveValue = state.playerStats.passiveResource;

      dispatch(setResource(passiveValue));
      dispatch(setTotalResource(passiveValue));
      const xpOnInterval =
        passiveValue + passiveValue * state.playerStats.xpRenderBonus;
      dispatch(setXp(xpOnInterval));
    }, 10000);

    return () => clearInterval(interval);
  }, [state.playerStats.passiveResource, dispatch]);
}

export default usePlayerStatsUpdater;
