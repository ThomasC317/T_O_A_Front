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
  setFarmerIsActive,
} from "@/context/PlayerContext";
import { GameQualities } from "@/utils/GameQualities";

const useVillagerResources = () => {
  const { state, dispatch } = usePlayer();
  const initialVillagers = useMemo(
    () => [
      {
        id: 1,
        name: "John the Harvester",
        bonus: 1.1,
        resourcePerSecond: 3,
        baseResourcePerSecond: 3,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 500,
        isActive: false,
        quality: GameQualities.RARE,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 300,
        resourceUpgradeFactor: 1.12,
        nextUpgradeCost: 300,
      },
      {
        id: 2,
        name: "Lily the Gardener",
        bonus: 1.2,
        resourcePerSecond: 2,
        baseResourcePerSecond: 2,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 300,
        isActive: false,
        quality: GameQualities.UNCOMMON,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 200,
        resourceUpgradeFactor: 1.08,
        nextUpgradeCost: 200,
      },
      {
        id: 3,
        name: "Greg the Tiller",
        bonus: 1.0,
        resourcePerSecond: 4,
        baseResourcePerSecond: 4,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 400,
        isActive: false,
        quality: GameQualities.EPIC,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 400,
        resourceUpgradeFactor: 1.16,
        nextUpgradeCost: 400,
      },
      {
        id: 4,
        name: "Alice the Sower",
        bonus: 1.3,
        resourcePerSecond: 5,
        baseResourcePerSecond: 5,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 600,
        isActive: false,
        quality: GameQualities.LEGENDARY,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 500,
        resourceUpgradeFactor: 1.2,
        nextUpgradeCost: 500,
      },
      {
        id: 5,
        name: "Eli the Planter",
        bonus: 1.15,
        resourcePerSecond: 2.5,
        baseResourcePerSecond: 2.5,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 350,
        isActive: false,
        quality: GameQualities.RARE,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 250,
        resourceUpgradeFactor: 1.1,
        nextUpgradeCost: 250,
      },
      {
        id: 6,
        name: "Nina the Irrigator",
        bonus: 1.05,
        resourcePerSecond: 3.5,
        baseResourcePerSecond: 3.5,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 450,
        isActive: false,
        quality: GameQualities.UNCOMMON,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 220,
        resourceUpgradeFactor: 1.07,
        nextUpgradeCost: 220,
      },
      {
        id: 7,
        name: "Owen the Harrower",
        bonus: 1.25,
        resourcePerSecond: 4.5,
        baseResourcePerSecond: 4.5,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 550,
        isActive: false,
        quality: GameQualities.EPIC,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 450,
        resourceUpgradeFactor: 1.14,
        nextUpgradeCost: 450,
      },
      {
        id: 8,
        name: "Maya the Mulcher",
        bonus: 1.35,
        resourcePerSecond: 6,
        baseResourcePerSecond: 6,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 700,
        isActive: false,
        quality: GameQualities.LEGENDARY,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 600,
        resourceUpgradeFactor: 1.18,
        nextUpgradeCost: 600,
      },
      {
        id: 9,
        name: "Sam the Seeder",
        bonus: 1.1,
        resourcePerSecond: 2.8,
        baseResourcePerSecond: 2.8,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 370,
        isActive: false,
        quality: GameQualities.RARE,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 280,
        resourceUpgradeFactor: 1.09,
        nextUpgradeCost: 280,
      },
      {
        id: 10,
        name: "Emma the Cultivator",
        bonus: 1.22,
        resourcePerSecond: 3.8,
        baseResourcePerSecond: 3.8,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 480,
        isActive: false,
        quality: GameQualities.UNCOMMON,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 320,
        resourceUpgradeFactor: 1.11,
        nextUpgradeCost: 320,
      },
      {
        id: 11,
        name: "Jack the Harvester",
        bonus: 1.28,
        resourcePerSecond: 5.5,
        baseResourcePerSecond: 5.5,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 650,
        isActive: false,
        quality: GameQualities.EPIC,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 500,
        resourceUpgradeFactor: 1.13,
        nextUpgradeCost: 500,
      },
      {
        id: 12,
        name: "Sophia the Planter",
        bonus: 1.4,
        resourcePerSecond: 7,
        baseResourcePerSecond: 7,
        description: "Miner delves deep into the mines to extract precious ores and gems.",
        totalResourcesGenerated: 800,
        isActive: false,
        quality: GameQualities.LEGENDARY,
        level: 1,
        maxLevel: 50,
        baseResourceForUpgrade: 700,
        resourceUpgradeFactor: 1.2,
        nextUpgradeCost: 700,
      },
    ],
    []
  );

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      console.log(initialVillagers);
      initialVillagers.forEach((farmer) => {
        dispatch(addFarmer(farmer));
      });
    }
  }, [initialVillagers]);

};

const useSetFarmerIsActive = () => {
  const { dispatch } = usePlayer();

  const setFarmerIsActiveHandler = useCallback(
    (farmer: Farmer) => {
        if(!farmer.isActive)
          dispatch(setPlayerStats({ intelligence: farmer.resourcePerSecond }, "add"));
        else 
          dispatch(setPlayerStats({ intelligence: farmer.resourcePerSecond }, "remove"));
        dispatch(setFarmerIsActive(farmer.id,!farmer.isActive))
    },
    [dispatch]
  );
  return setFarmerIsActiveHandler;
};

const useSetFarmerLevel = () => {
  const { state, dispatch } = usePlayer();

  const setFarmerLevelHandler = useCallback(
    (farmer: Farmer) => {
      if (
        state.playerStats.resource >= farmer.nextUpgradeCost
      ) {
        dispatch(setFarmerLevel(farmer.id, 1));
        dispatch(
          setFarmerResourcePerSecond(farmer.id, farmer.baseResourcePerSecond)
        );
        dispatch(setResource(-farmer.nextUpgradeCost));
        dispatch(setPlayerStats({ intelligence: farmer.baseResourcePerSecond }, "add"));
        let nextUpgradeCost = Math.round(
          farmer.baseResourceForUpgrade *
            Math.pow(farmer.resourceUpgradeFactor, farmer.level)
        );
        dispatch(setNextUpgradeCost(farmer.id, nextUpgradeCost));
      }
    },
    [state.playerStats.resource, dispatch]
  );
  return setFarmerLevelHandler;
};

export { useVillagerResources, useSetFarmerLevel, useSetFarmerIsActive };
