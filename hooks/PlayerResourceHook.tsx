import { useEffect, useMemo } from "react";
import {
  usePlayer,
  setResource,
} from "../context/PlayerContext";

function usePlayerStatsUpdater() {
  const { state, dispatch } = usePlayer();

  useEffect(() => {
    const interval = setInterval(() => {
        console.log("ressource +" + state.village.resourcePerSecond)
        setResource(state.village.resourcePerSecond,dispatch);
    }, 1000);

    return () => clearInterval(interval);
  }, [state.village.resourcePerSecond, dispatch]);

  useEffect(() => {
    console.log("active village update" +state.user.activeVillage?.name)
  }, [state.user.activeVillage]);
}

export default usePlayerStatsUpdater;
