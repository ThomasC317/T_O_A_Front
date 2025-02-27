import { useCallback, useEffect, useMemo, useRef } from "react";
import { Farmer, FarmerStats } from "@/context/FarmerReducer";
import {
  usePlayer,
  SetPassiveResource,
  setFarmerLevel,
  addFarmer,
  setResource,
  setFarmerResourcePerSecond,
  setNextUpgradeCost,
  setPlayerStats,
  AddServant,
} from "@/context/PlayerContext";
import { GameQualities } from "@/utils/GameQualities";
import { GameStats } from "@/utils/GameStats";

const useServantResources = () => {
  const { state, dispatch } = usePlayer();


  const hasMounted = useRef(false);

  // useEffect(() => {
  //   if (!hasMounted.current) {
  //     hasMounted.current = true;
  //     initialServant.forEach((servant) => {
  //       dispatch(AddServant(servant));

  //     });
  
  //   //   if (state.playerStats.farmerRenderBonus > 0) {
  //   //     totalBonusResource +=
  //   //       totalBonusResource * state.playerStats.farmerRenderBonus;
  //   //   }
  
  //   //   if(totalBonusResource > 0) {
  //   //     dispatch(setPlayerStats({ intelligence: totalBonusResource }, "add"));
  //   //   }
  //   }
  // }, [initialServant]);

  const cumulativeStatsRef = useRef<GameStats>({
    strength: 0,
    agility: 0,
    intelligence: 0,
    stamina: 0,
    charisma: 0,
    criticalChances: 0,
    motivation: 0,
    concentration: 0,
  });
  useEffect(() => {
    const newCumulativeStats: GameStats = {
      strength: 0,
      agility: 0,
      intelligence: 0,
      stamina: 0,
      charisma: 0,
      criticalChances: 0,
      motivation: 0,
      concentration: 0,
    };

    const multiplier = state.farmerStats.servantStatsMultiplier || 1;
  
    // Calculate new cumulative stats
    state.farmerStats.servants.forEach((servant) => {
      if (servant.stats) {
        newCumulativeStats.strength += servant.stats.strength * multiplier;
        newCumulativeStats.agility += servant.stats.agility * multiplier;
        newCumulativeStats.intelligence += servant.stats.intelligence * multiplier;
        newCumulativeStats.stamina += servant.stats.stamina * multiplier;
        newCumulativeStats.charisma += servant.stats.charisma* multiplier;
        newCumulativeStats.criticalChances += servant.stats.criticalChances * multiplier;
        newCumulativeStats.motivation += servant.stats.motivation * multiplier;
        newCumulativeStats.concentration += servant.stats.concentration * multiplier;
      }
    });
  
    // Compare new cumulative stats with previous stats
    const statsToUpdate: Partial<GameStats> = {};
    Object.keys(newCumulativeStats).forEach((key) => {
      const statKey = key as keyof GameStats;
      if (newCumulativeStats[statKey] !== cumulativeStatsRef.current[statKey]) {
        statsToUpdate[statKey] = newCumulativeStats[statKey] - cumulativeStatsRef.current[statKey];
      }
    });
  
    // Update ref with new stats
    cumulativeStatsRef.current = newCumulativeStats;
  
    // Dispatch only if there are changes
    if (Object.keys(statsToUpdate).length > 0) {
      dispatch(setPlayerStats(statsToUpdate as GameStats, "add"));
      console.log("Updated Servant Stats:", statsToUpdate);
    }
  
  }, [state.farmerStats.servants, dispatch]);

};

export { useServantResources };
