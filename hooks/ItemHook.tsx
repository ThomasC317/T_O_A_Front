import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Farmer, FarmerStats } from "@/context/FarmerReducer";
import {
  usePlayer,
  SetPassiveResource,
  addItem,
  setIsEquippedItem,
  setOnclickResource,
  SetSkillReloadTime,
  SetSkillDurationTime,
  setShopReduction,
  setCriticalChance,
  setFarmerRenderBonus,
  setXpRenderBonus,
  SetSkillDisplayedReloadTime,
  setItemValue,
  setPlayerStats,
} from "@/context/PlayerContext";
import { GameQualities } from "@/utils/GameQualities";
import { GeneralType, ItemType } from "@/utils/Item";
import { GameItem } from "@/context/ItemReducer";

const useItemsResources = () => {
  const { state, dispatch } = usePlayer();
  const initialItems = useMemo(
    () => [
      {
        itemId: 1,
        name: "Pioche de mineur",
        type: ItemType.MAIN_HAND,
        isEquipped: false,
        level: 1,
        quality: GameQualities.COMMON,
        apogeeLevel: 1,
        isLinked: false,
        value: 100,
        durability: 1000,
        stats: {
          strength: 1,
          intelligence: 1,
        },
        description: "A basic miner's pickaxe. Useful for gathering resources.",
        generalType: GeneralType.TOOL,
        icon: "/uncommon_sword.png"
      },
      {
        itemId: 2,
        name: "Miner's Helmet",
        type: ItemType.HEAD,
        isEquipped: false,
        level: 1,
        quality: GameQualities.UNCOMMON,
        apogeeLevel: 1,
        isLinked: false,
        value: 200,
        durability: 800,
        stats: {
          strength: 2,
          stamina: 3,
          intelligence: 1,
          concentration: 1,
        },
        description:
          "An essential helmet for miners, offering protection and minor stat boosts.",
          generalType: GeneralType.ARMOR,
        icon: "/rare_plate_helmet.png"
      },
      {
        itemId: 3,
        name: "Guardian's Chestplate",
        type: ItemType.CHESTPLATE,
        isEquipped: false,
        level: 1,
        quality: GameQualities.RARE,
        apogeeLevel: 1,
        isLinked: false,
        value: 500,
        durability: 1200,
        stats: {
          strength: 5,
          stamina: 7,
          agility: 2,
          concentration: 3,
        },
        description:
          "A sturdy chestplate providing excellent protection and enhancing physical abilities.",
          generalType: GeneralType.ARMOR,
                  icon: "/rare_plate_chestplate.png"
      },
      {
        itemId: 4,
        name: "Belt of Endurance",
        type: ItemType.BELT,
        isEquipped: false,
        level: 1,
        quality: GameQualities.RARE,
        apogeeLevel: 1,
        isLinked: false,
        value: 300,
        durability: 1000,
        stats: {
          stamina: 6,
          strength: 3,
          motivation: 2,
          agility: 1,
        },
        description:
          "A belt that boosts the wearer's endurance and physical capabilities.",
          generalType: GeneralType.ARMOR,
           icon: "/rare_belt.png"
      },
      {
        itemId: 5,
        name: "Ring of Focus",
        type: ItemType.RING,
        isEquipped: false,
        level: 1,
        quality: GameQualities.EPIC,
        apogeeLevel: 1,
        isLinked: false,
        value: 1000,
        durability: 600,
        stats: {
          concentration: 8,
          intelligence: 5,
          charisma: 3,
          criticalChances: 4,
        },
        description:
          "A powerful ring that significantly enhances focus and mental prowess.",
          generalType: GeneralType.ARMOR,
             icon: "/rare_ring.png"
      },
      {
        itemId: 6,
        name: "Boots of Swiftness",
        type: ItemType.BOOTS,
        isEquipped: false,
        level: 1,
        quality: GameQualities.UNCOMMON,
        apogeeLevel: 1,
        isLinked: false,
        value: 400,
        durability: 900,
        stats: {
          agility: 6,
          stamina: 3,
          strength: 2,
          concentration: 1,
        },
        description: "Boots that grant the wearer enhanced speed and agility.",
        generalType: GeneralType.ARMOR,
         icon: "/rare_plate_boot.png"
      },
      {
        itemId: 7,
        name: "Artifact of Wisdom",
        type: ItemType.ARTIFACT,
        isEquipped: false,
        level: 1,
        quality: GameQualities.LEGENDARY,
        apogeeLevel: 1,
        isLinked: false,
        value: 2000,
        durability: 1500,
        stats: {
          intelligence: 10,
          charisma: 6,
          criticalChances: 5,
          concentration: 7,
        },
        description:
          "A legendary artifact that vastly increases intelligence and critical thinking.",
          generalType: GeneralType.ARMOR,
                   icon: "/epic_artifact1.png"
      },
      {
        itemId: 8,
        name: "Ring of Mastery",
        type: ItemType.RING,
        isEquipped: false,
        level: 1,
        quality: GameQualities.RARE,
        apogeeLevel: 1,
        isLinked: false,
        value: 1000,
        durability: 600,
        stats: {
          concentration: 4,
          intelligence: 6,
          charisma: 1
        },
        description:
          "A powerful ring that significantly enhances focus and mental prowess.",
          generalType: GeneralType.ARMOR,
             icon: "/rare_ring.png"
      },
    ],
    []
  );

  useEffect(() => {
    if (state.gameItem.items.length === 0) {
      const itemsToAdd = initialItems.filter(
        (item) =>
          !state.gameItem.items.some((existing) => existing.id === item.id)
      );

      itemsToAdd.forEach((item) => {
        dispatch(addItem(item));
      });

      itemsToAdd.forEach((item) => {
        if(item.isEquipped)
          dispatch(setPlayerStats(item.stats, "add"));
      })
    }
  }, [initialItems]);

  useEffect(() => {
  console.log("test : " +state.gameItem.items)
}, [state.gameItem.items, dispatch]);




  useEffect(() => {
    const uniqueItems = state.gameItem.items.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
    if (uniqueItems.length < state.gameItem.items.length) {
      state.gameItem.items = uniqueItems
    }
  }, [state.gameItem.items, dispatch]);
};

const useSetIsEquippedItem = () => {
  const { state, dispatch } = usePlayer();

  const setIsEquippedItemHandler = useCallback(
    (item: GameItem) => {
        dispatch(setIsEquippedItem(item.id, !item.isEquipped));
    },
    [state.gameItem.items, dispatch]
  );
  return setIsEquippedItemHandler;
};

const useBuyItem = () => {
  const { state, dispatch } = usePlayer();

  const setIsEquippedItemHandler = useCallback(
    (item: GameItem) => {
        dispatch(addItem(item));
    },
    [state.gameItem.items, dispatch]
  );
  return setIsEquippedItemHandler;
};

const useToggleEquipped = () => {
  const { state, dispatch } = usePlayer();
  const [items, setItems] = useState(state.gameItem.items);
  const [itemToToggle, setItemToToggle] = useState(null);
  const [itemToUnequip, setItemToUnequip] = useState(null);

  const toggleEquipped = useCallback(
    (item) => {
      setItemToToggle(item);
      setItems((prevItems) => {
        const itemType = item.type;

        // Find the currently equipped items of the same type
        const currentlyEquippedItems = prevItems.filter(
          (i) => i.isEquipped && i.type === itemType
        );

        let updatedItems = [...prevItems];

        // If the item is already equipped, unequip it
        if (item.isEquipped) {
          updatedItems = updatedItems.map((i) =>
            i.id === item.id ? { ...i, isEquipped: false } : i
          );
        } else {
          // If the slot is already occupied by another item, unequip that item
          if (currentlyEquippedItems.length > 0) {
            const itemToUnequip = currentlyEquippedItems[0];
            setItemToUnequip(itemToUnequip); // Mark item to unequip later
            updatedItems = updatedItems.map((i) =>
              i.id === itemToUnequip.id ? { ...i, isEquipped: false } : i
            );
          }

          // Equip the new item
          updatedItems = updatedItems.map((i) =>
            i.id === item.id ? { ...i, isEquipped: true } : i
          );
        }

        return updatedItems;
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (itemToToggle) { 
      if (itemToToggle.isEquipped) {
        // Item was equipped, now unequip it
        dispatch(setIsEquippedItem(itemToToggle.id, false));
        dispatch(setPlayerStats(itemToToggle.stats, "remove"));
        
      } else {
        // If an item was unequipped, process that first
        if (itemToUnequip) {
          const unequipStats = itemToUnequip.stats;
          dispatch(setIsEquippedItem(itemToUnequip.id, false));
          dispatch(setPlayerStats(unequipStats, "remove"));
        }
  
        // Equip the new item
        dispatch(setIsEquippedItem(itemToToggle.id, true));
        dispatch(setPlayerStats(itemToToggle.stats, "add"));
      }
    }
  }, [itemToToggle, itemToUnequip]);
  return toggleEquipped;

  
};



export { useItemsResources, useSetIsEquippedItem, useToggleEquipped};
