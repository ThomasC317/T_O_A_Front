import React from "react";
import {
  getItemCardBackgroundColor,
  getQualityBorders,
  getQualityColor,
  getTextColor,
  getTranslatedQuality,
} from "@/utils/GameQualities";
import { ItemCost } from "./itemCost";
import { usePlayer } from "@/context/PlayerContext";

export default function GameCard({
  item,
  onPrimaryAction,
  onSecondaryAction,
  onThirdAction,
  thirdButtonLabel,
  isThirdButtonDisabled,
  lore,
}) {
  if (!item) {
    return null; // or some fallback UI
  }
  const { state } = usePlayer();
  return (
    <div
      className={`w-full max-w-sm p-6 transform transition-transform border-4 border-transparent bg-black p-6 menu-bar ${getItemCardBackgroundColor(
        item.quality
      )}  rounded-lg shadow-lg menu-bar ${getQualityBorders(item.quality)}`}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`flex items-center justify-center aspect-square w-[60px] ${getQualityBorders(
            item.quality
          )}`}
        >
          <img
            className="w-8 h-8 text-primary-foreground"
            src={`${item.icon}`}
          />
        </div>
        <h3 className={`text-lg font-bold mb-2 ${getTextColor(item.quality)}`}>
          {item.name}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className={`text-lg ${getTextColor(item.quality)}`}>
          {getTranslatedQuality(item.quality)}
        </div>
        <div className="flex space-x-2 justify-end">
          <div className="flex">
            {item.nextUpgradeCost && (
              <ItemCost value={item.nextUpgradeCost}></ItemCost>
            )}
            {onPrimaryAction && (
              <button
                className="px-4 py-2 text-white rounded-lg border border-secondary"
                onClick={onPrimaryAction}
                disabled={item.nextUpgradeCost > state.playerStats.resource}
              >
                +
              </button>
            )}
          </div>

          {onSecondaryAction && (
            <button
              className="px-4 py-2 text-white rounded-lg border border-secondary"
              onClick={onSecondaryAction}
            >
              -
            </button>
          )}
        </div>
      </div>
      {item.level && (
        <p className="flex text-sm text-muted-foreground  items-center">
          Niveau: {item.level}
        </p>
      )}
      {item.resourcePerSecond && (
        <p className="flex text-sm text-muted-foreground items-center mb-4">
          {item.resourcePerSecond}
          <img src="/arcanum.png" width={30} height={30} alt="arcanum" />
          /s
        </p>
      )}
      {lore && (
        <div className="text-sm text-muted-foreground mt-2 italic ">{lore}</div>
      )}
      {onThirdAction && (
        <button
          className="px-4 py-2 text-white rounded-lg border border-secondary"
          onClick={onThirdAction}
          disabled={isThirdButtonDisabled}
        >
          {thirdButtonLabel}
        </button>
      )}
    </div>
  );
}
