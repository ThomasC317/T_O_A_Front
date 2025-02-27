import { SetShopArmors, SetShopFarmers, SetShopServants, SetShopTools, usePlayer } from '@/context/PlayerContext';
import { GeneralType, ItemType } from '@/utils/Item';
import { GameQualities } from '@/utils/GameQualities';
import { useEffect, useMemo, useState } from 'react';

const useShop = () => {
    const { state, dispatch } = usePlayer();
    const shopTools = useMemo(
      () => [
        {
          id: 9,
          name: "Sword of Valor",
          type: ItemType.MAIN_HAND,
          isEquipped: false,
          level: 1,
          quality: GameQualities.RARE,
          apogeeLevel: 1,
          isLinked: false,
          value: 800,
          durability: 1100,
          stats: {
            strength: 7,
            agility: 4,
            concentration: 2,
            criticalChances: 3,
          },
          description: "A rare sword that grants its wielder courage and strength in battle.",
          generalType: GeneralType.TOOL,
          icon: "/uncommon_sword.png"
        },
        {
          id: 10,
          name: "Shield of Fortitude",
          type: ItemType.SECOND_HAND,
          isEquipped: false,
          level: 1,
          quality: GameQualities.UNCOMMON,
          apogeeLevel: 1,
          isLinked: false,
          value: 600,
          durability: 1300,
          stats: {
            stamina: 6,
            strength: 4,
            concentration: 2,
          },
          description: "A sturdy shield that enhances the wearer's endurance and resilience.",
          generalType: GeneralType.TOOL,
          icon: "/rare_shield.png"
        }
      ],
      []);

      const shopArmors = useMemo(
        () => [
          {
            id: 11,
            name: "Amulet of the Sage",
            type: ItemType.NECK,
            isEquipped: false,
            level: 1,
            quality: GameQualities.EPIC,
            apogeeLevel: 1,
            isLinked: false,
            value: 1500,
            durability: 700,
            stats: {
              intelligence: 8,
              charisma: 4,
              concentration: 6,
              criticalChances: 3,
            },
            description: "An epic amulet that bestows great wisdom and eloquence upon its wearer.",
            generalType: GeneralType.ARMOR,
            icon: "/rare_neck.png"
          },
          {
            id: 12,
            name: "Cloak of Shadows",
            type: ItemType.BACK,
            isEquipped: false,
            level: 1,
            quality: GameQualities.LEGENDARY,
            apogeeLevel: 1,
            isLinked: false,
            value: 2500,
            durability: 1400,
            stats: {
              agility: 10,
              concentration: 7,
              criticalChances: 5,
              stamina: 4,
            },
            description: "A legendary cloak that grants unmatched stealth and agility.",
            generalType: GeneralType.ARMOR,
            icon: "/uncommon_back.png"
          },
          {
            id: 13,
            name: "Crown of Command",
            type: ItemType.HEAD,
            isEquipped: false,
            level: 1,
            quality: GameQualities.LEGENDARY,
            apogeeLevel: 1,
            isLinked: false,
            value: 3000,
            durability: 1600,
            stats: {
              charisma: 10,
              intelligence: 6,
              criticalChances: 4,
              concentration: 5,
            },
            description: "A legendary crown that enhances leadership and mental prowess.",
            generalType: GeneralType.ARMOR,
            icon: "/rare_crown.png"
          },
          {
            id: 15,
            name: "Belt of the Unyielding",
            type: ItemType.BELT,
            isEquipped: false,
            level: 1,
            quality: GameQualities.RARE,
            apogeeLevel: 1,
            isLinked: false,
            value: 700,
            durability: 1100,
            stats: {
              stamina: 8,
              strength: 5,
              motivation: 4,
            },
            description: "A rare belt that provides unyielding stamina and strength to its wearer.",
            generalType: GeneralType.ARMOR,
            icon: "/rare_belt.png"
          },
        ],
        []);

        const shopVillagers = useMemo(
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
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
              value:10
            },
          ],
          []
        );
  // Initialize state with shop items
  const shopServants = useMemo(
    () => [
        {
            id: 1,
            name: "John the Strategist",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.RARE,
            value:10,
            stats: {
              strength: 10,
              agility: 12,
              intelligence: 14,
              stamina: 11,
              charisma: 9,
              criticalChances: 7,
              motivation: 8,
              concentration: 6,
            },
          },
          {
            id: 2,
            name: "Lily the Enchanter",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.UNCOMMON,
            value:10,
            stats: {
              strength: 8,
              agility: 10,
              intelligence: 16,
              stamina: 7,
              charisma: 14,
              criticalChances: 5,
              motivation: 6,
              concentration: 12,
            },
          },
          {
            id: 3,
            name: "Greg the Guardian",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.EPIC,
            value:10,
            stats: {
              strength: 15,
              agility: 9,
              intelligence: 12,
              stamina: 14,
              charisma: 8,
              criticalChances: 10,
              motivation: 7,
              concentration: 9,
            },
          },
          {
            id: 4,
            name: "Alice the Protector",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.LEGENDARY,
            value:10,
            stats: {
              strength: 18,
              agility: 14,
              intelligence: 13,
              stamina: 16,
              charisma: 12,
              criticalChances: 11,
              motivation: 10,
              concentration: 13,
            },
          },
          {
            id: 5,
            name: "Eli the Overseer",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.RARE,
            value:10,
            stats: {
              strength: 11,
              agility: 10,
              intelligence: 13,
              stamina: 9,
              charisma: 10,
              criticalChances: 6,
              motivation: 7,
              concentration: 8,
            },
          },
          {
            id: 6,
            name: "Nina the Luminary",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.UNCOMMON,
            value:10,
            stats: {
              strength: 9,
              agility: 11,
              intelligence: 15,
              stamina: 8,
              charisma: 13,
              criticalChances: 8,
              motivation: 9,
              concentration: 10,
            },
          },
          {
            id: 7,
            name: "Owen the Shieldbearer",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.EPIC,
            value:10,
            stats: {
              strength: 16,
              agility: 10,
              intelligence: 11,
              stamina: 15,
              charisma: 10,
              criticalChances: 9,
              motivation: 8,
              concentration: 11,
            },
          },
          {
            id: 8,
            name: "Maya the Warrior",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.LEGENDARY,
            value:10,
            stats: {
              strength: 20,
              agility: 16,
              intelligence: 14,
              stamina: 18,
              charisma: 15,
              criticalChances: 12,
              motivation: 12,
              concentration: 14,
            },
          },
          {
            id: 9,
            name: "Sam the Tactician",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.RARE,
            value:10,
            stats: {
              strength: 12,
              agility: 9,
              intelligence: 14,
              stamina: 8,
              charisma: 11,
              criticalChances: 7,
              motivation: 8,
              concentration: 7,
            },
          },
          {
            id: 10,
            name: "Emma the Strategist",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.UNCOMMON,
            value:10,
            stats: {
              strength: 10,
              agility: 12,
              intelligence: 17,
              stamina: 9,
              charisma: 13,
              criticalChances: 6,
              motivation: 7,
              concentration: 10,
            },
          },
          {
            id: 11,
            name: "Jack the Hero",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.EPIC,
            value:10,
            stats: {
              strength: 17,
              agility: 13,
              intelligence: 12,
              stamina: 14,
              charisma: 11,
              criticalChances: 8,
              motivation: 9,
              concentration: 12,
            },
          },
          {
            id: 12,
            name: "Sophia the Conqueror",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.LEGENDARY,
            value:10,
            stats: {
              strength: 22,
              agility: 18,
              intelligence: 16,
              stamina: 20,
              charisma: 17,
              criticalChances: 14,
              motivation: 15,
              concentration: 16,
            },
          },
          {
            id: 13,
            name: "Laura the Artisan",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.RARE,
            value:10,
            stats: {
              strength: 11,
              agility: 13,
              intelligence: 15,
              stamina: 10,
              charisma: 10,
              criticalChances: 8,
              motivation: 9,
              concentration: 7,
            },
          },
          {
            id: 14,
            name: "Marcus the Engineer",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.UNCOMMON,
            value:10,
            stats: {
              strength: 7,
              agility: 12,
              intelligence: 18,
              stamina: 8,
              charisma: 12,
              criticalChances: 6,
              motivation: 8,
              concentration: 14,
            },
          },
          {
            id: 15,
            name: "Isabella the Healer",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.EPIC,
            value:10,
            stats: {
              strength: 14,
              agility: 11,
              intelligence: 17,
              stamina: 13,
              charisma: 9,
              criticalChances: 9,
              motivation: 8,
              concentration: 10,
            },
          },
          {
            id: 16,
            name: "Ethan the Sentinel",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.LEGENDARY,
            value:10,
            stats: {
              strength: 20,
              agility: 15,
              intelligence: 14,
              stamina: 18,
              charisma: 12,
              criticalChances: 11,
              motivation: 12,
              concentration: 14,
            },
          },
          {
            id: 17,
            name: "Olivia the Scout",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.RARE,
            value:10,
            stats: {
              strength: 10,
              agility: 14,
              intelligence: 12,
              stamina: 9,
              charisma: 8,
              criticalChances: 7,
              motivation: 7,
              concentration: 8,
            },
          },
          {
            id: 18,
            name: "Logan the Blacksmith",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.UNCOMMON,
            value:10,
            stats: {
              strength: 13,
              agility: 11,
              intelligence: 10,
              stamina: 12,
              charisma: 9,
              criticalChances: 5,
              motivation: 6,
              concentration: 11,
            },
          },
          {
            id: 19,
            name: "Ava the Alchemist",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.EPIC,
            value:10,
            stats: {
              strength: 12,
              agility: 12,
              intelligence: 20,
              stamina: 10,
              charisma: 15,
              criticalChances: 10,
              motivation: 10,
              concentration: 12,
            },
          },
          {
            id: 20,
            name: "Oliver the Gladiator",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.LEGENDARY,
            value:10,
            stats: {
              strength: 22,
              agility: 14,
              intelligence: 13,
              stamina: 20,
              charisma: 13,
              criticalChances: 12,
              motivation: 15,
              concentration: 15,
            },
          },
          {
            id: 21,
            name: "Charlotte the Medic",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.RARE,
            value:10,
            stats: {
              strength: 9,
              agility: 12,
              intelligence: 16,
              stamina: 7,
              charisma: 11,
              criticalChances: 8,
              motivation: 9,
              concentration: 8,
            },
          },
          {
            id: 22,
            name: "Henry the Engineer",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.UNCOMMON,
            value:10,
            stats: {
              strength: 10,
              agility: 14,
              intelligence: 18,
              stamina: 9,
              charisma: 10,
              criticalChances: 7,
              motivation: 8,
              concentration: 11,
            },
          },
          {
            id: 23,
            name: "Emily the Navigator",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.EPIC,
            value:10,
            stats: {
              strength: 13,
              agility: 16,
              intelligence: 14,
              stamina: 12,
              charisma: 12,
              criticalChances: 9,
              motivation: 10,
              concentration: 10,
            },
          },
          {
            id: 24,
            name: "Jack the Commander",
            description: "Miner delves deep into the mines to extract precious ores and gems.",
            quality: GameQualities.LEGENDARY,
            value:10,
            stats: {
              strength: 22,
              agility: 15,
              intelligence: 15,
              stamina: 18,
              charisma: 16,
              criticalChances: 14,
              motivation: 14,
              concentration: 16,
            },
          },
    ],
    []
  );
  useEffect(() => {
 
      const itemsToAdd = shopTools.filter(
        (item) =>
          !state.gameItem.items.some((existing) => existing.id === item.id)
      );
      dispatch(SetShopTools(itemsToAdd))

  }, [shopTools]);

  useEffect(() => {
 
    const itemsToAdd = shopArmors.filter(
      (item) =>
        !state.gameItem.items.some((existing) => existing.id === item.id)
    );
    dispatch(SetShopArmors(itemsToAdd))

}, [shopArmors]);

useEffect(() => {
 
  const itemsToAdd = shopVillagers.filter(
    (item) =>
      !state.gameItem.items.some((existing) => existing.id === item.id)
  );
  dispatch(SetShopFarmers(itemsToAdd))

}, [shopArmors]);

useEffect(() => {
 
  const itemsToAdd = shopServants.filter(
    (item) =>
      !state.gameItem.items.some((existing) => existing.id === item.id)
  );
  dispatch(SetShopServants(itemsToAdd))

}, [shopArmors]);



  useEffect(() => {
    console.log(state.shopState.items)
  }, [state.shopState.items])
  // Access the necessary state from the Redux store
  
 

  // useEffect(() => {
  //   shopItems.forEach((item) => {
  //       item.value = item.value - (state.playerStats.stats.charisma/100 * item.value)
  //     })
  //     dispatch(SetShopItems(shopItems))
  // }, [state.playerStats.stats.charisma]);

  // Return the items list and buyItem function
  return { shopTools,shopArmors };
};

export default useShop;