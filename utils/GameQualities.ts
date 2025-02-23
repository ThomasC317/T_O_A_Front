export enum GameQualities {
  COMMON = "COMMON",
  UNCOMMON = "UNCOMMON",
  RARE = "RARE",
  EPIC = "EPIC",
  LEGENDARY = "LEGENDARY"
}

export const qualityOrder = {
  COMMON: 1,
  UNCOMMON: 2,
  RARE: 3,
  EPIC: 4,
  LEGENDARY: 5
};

export const getQualityColor = (quality: GameQualities): string => {
  switch (quality) {
    case GameQualities.COMMON:
      return "bg-white-700";
    case GameQualities.UNCOMMON:
      return "bg-lime-700";
    case GameQualities.RARE:
      return "bg-blue-700";
    case GameQualities.EPIC:
      return "bg-purple-700"; 
    case GameQualities.LEGENDARY:
      return "bg-amber-700"; 
    default:
      return "bg-white-700"; 
  }
}



export const getItemCardBackgroundColor = (quality: GameQualities): string => {
  switch (quality) {
    case GameQualities.COMMON:
      return "";
    case GameQualities.UNCOMMON:
      return "uncommon-item-card-bg";
    case GameQualities.RARE:
      return "rare-item-card-bg";
    case GameQualities.EPIC:
      return "epic-item-card-bg"; 
    case GameQualities.LEGENDARY:
      return "legendary-item-card-bg"; 
    default:
      return ""; 
  }
}

export const getQualityBorders = (quality: GameQualities): string => {
  switch (quality) {
    case GameQualities.COMMON:
      return "border-white-700";
    case GameQualities.UNCOMMON:
      return "border-lime-700 uncommon-bg";
    case GameQualities.RARE:
      return "border-blue-700 rare-bg";
    case GameQualities.EPIC:
      return "border-purple-700 epic-bg"; 
    case GameQualities.LEGENDARY:
      return "border-amber-700 legendary-bg"; 
    default:
      return "border-white-700"; 
  }
}

export const getTextColor = (quality: GameQualities): string => {
  switch (quality) {
    case GameQualities.COMMON:
      return "text-white-500";
    case GameQualities.UNCOMMON:
      return "text-lime-500";
    case GameQualities.RARE:
      return "text-blue-500";
    case GameQualities.EPIC:
      return "text-purple-500"; 
    case GameQualities.LEGENDARY:
      return "text-amber-500"; 
    default:
      return "text-white-500"; 
  }
}

export const getTranslatedQuality = (quality: GameQualities): string => {
  switch (quality) {
    case GameQualities.COMMON:
      return "Commun";
    case GameQualities.UNCOMMON:
      return "Inhabituel";
    case GameQualities.RARE:
      return "Rare";
    case GameQualities.EPIC:
      return "Épique"; 
    case GameQualities.LEGENDARY:
      return "Légendaire"; 
    default:
      return "Commun"; 
  }
}