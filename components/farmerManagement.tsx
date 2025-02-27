import React, { useEffect, useState } from 'react';
import GameCard from './gameCard';
import { setFarmerIsActive, usePlayer } from '@/context/PlayerContext';
import { Farmer } from '@/context/FarmerReducer';
import { useSetFarmerLevel,useSetFarmerIsActive } from '@/hooks/FarmerResourceHook';
import {
  getItemCardBackgroundColor,
  getQualityBorders,
  getTextColor,
  getTranslatedQuality,
  qualityOrder,
} from "@/utils/GameQualities";

const FarmersManagement = () => {
  const { state, dispatch } = usePlayer();
  const SetFarmerLevel = useSetFarmerLevel();
  const SetFarmerIsActive = useSetFarmerIsActive();
  const farmers = state.farmerStats.farmers;
  const [selectedFarmer, setSelectedFarmer] = useState(state.farmerStats.farmers[0]);
  const [isActivateButtonDisabled, setIsActivateButtonDisabled] = useState(false);

  const OnVillagerClick = (item) => {
    const activeItemsCount = state.farmerStats.farmers.filter((item) => item.isActive).length;
    if (!item.isActive && activeItemsCount >= state.farmerStats.totalFarmers) {
      setIsActivateButtonDisabled(true);
    } else {
      setIsActivateButtonDisabled(false);
    }
    setSelectedFarmer(item);
  };

    useEffect(() => {
        if(selectedFarmer)
            setSelectedFarmer(state.farmerStats.farmers.find((farmer) => farmer.id == selectedFarmer.id));
        else
            setSelectedFarmer(state.farmerStats.farmers[0]);
    }, [state.farmerStats.farmers])

  const maxFarmers = state.farmerStats.totalFarmers;
  const totalSlots = 8;

  return (
    <div className="flex flex-1">
      {/* Left side: List of Farmers */}
      <div className="flex flex-col gap-2 p-2 bg-gray-800 overflow-y-auto h-[540px]">
  {farmers
    .sort((a, b) => qualityOrder[b.quality] - qualityOrder[a.quality])
    .filter((item) => !item.isActive).length === 0 ? (
    // Cas où il n'y a aucun fermier
    <div
      className="flex flex-col items-center space-x-4 w-full cursor-default menu-bar"
    >
      <h3 className="text-base font-bold mb-2 text-gray-500">Aucun Farmer.</h3> 
      <h3 className="text-base font-bold mb-2 text-gray-500">Vous pouvez en obtenir dans la boutique !</h3> 
          </div>
  ) : (
    // Cas où il y a des fermiers
    farmers
      .sort((a, b) => qualityOrder[b.quality] - qualityOrder[a.quality])
      .filter((item) => !item.isActive)
      .map((item) => (
        <div
          key={item.id}
          className={`flex items-center space-x-4 w-full cursor-pointer ${
            selectedFarmer === item ? 'menu-bar-selected' : 'menu-bar'
          }`}
          onClick={() => OnVillagerClick(item)}
        >
          <div className={`flex items-center justify-center aspect-square w-[60px]`}>
            <img className="w-8 h-8 text-primary-foreground" src={`${item.icon}`} />
          </div>
          <h3 className={`text-base font-bold mb-2 ${getTextColor(item.quality)}`}>
            {item.name}
          </h3>
        </div>
      ))
  )}
</div>

      {/* Right side: Selected Farmer and Equipped Farmers */}
      <div className="flex flex-col p-4 flex-1">
        {/* Centered Selected Farmer Card */}
        <div className="flex justify-center items-center flex-1 mb-4">
          {selectedFarmer ? (
            <GameCard
              key={selectedFarmer.id}
              item={selectedFarmer}
              icon={GamepadIcon}
              onPrimaryAction={() => SetFarmerLevel(selectedFarmer)}
              lore={`Miner ${selectedFarmer.name} delves deep into the mines to extract precious ores and gems.`}
              onThirdAction={() => SetFarmerIsActive(selectedFarmer)}
              thirdButtonLabel={selectedFarmer.isActive ? 'Désactiver' : 'Activer'}
              isThirdButtonDisabled={isActivateButtonDisabled}
            />
          ) : (
            <div className="text-gray-500">Selectionnez un villageois pour avoir plus de détails.</div>
          )}
        </div>

        {/* Equipped Farmers Grid */}
        <div className="mt-4">
          <h2>Equipped Farmers:</h2>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {farmers
              .filter((item) => item.isActive)
              .sort((a, b) => qualityOrder[b.quality] - qualityOrder[a.quality])
              .concat(new Array(8).fill(null)) // Add placeholders if less than 8 items
              .slice(0, totalSlots) // Ensure only 8 items are rendered
              .map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 w-full cursor-pointer ${
                    item && selectedFarmer === item ? 'menu-bar-selected' : 'menu-bar'
                  } ${index >= farmers.filter((item) => item.isActive).length && maxFarmers < totalSlots ? 'bg-red-500' : ''}`}
                  onClick={() => item && OnVillagerClick(item)}
                >
                  {item ? (
                    <>
                      <div className="flex items-center justify-center aspect-square w-[60px]">
                        <img className="w-8 h-8 text-primary-foreground" src={`${item.icon}`} />
                      </div>
                      <h3 className={`text-base font-bold mb-2 ${getTextColor(item.quality)}`}>
                        {item.name}
                      </h3>
                    </>
                  ) : (
                    <div className="flex items-center justify-center aspect-square w-[60px] ${maxFarmers < totalSlots ? 'bg-red-500' : 'bg-gray-200'}">
                      {/* Placeholder or empty slot */}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersManagement;

function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}