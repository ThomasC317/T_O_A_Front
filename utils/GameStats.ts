export interface GameStats {
    strength: number;
    agility: number;
    intelligence: number;
    stamina: number;
    charisma: number;
    criticalChances: number;
    motivation: number;
    concentration: number;
  }

export const getTranslatedStat = (stat: string): string => {
  switch (stat) {
    case "strength":
      return "Force";
    case "agility":
      return "Agilité";
    case "intelligence":
      return "Intelligence";
    case "stamina":
      return "Endurance"; 
    case "charisma":
      return "Charisme"; 
    case "criticalChances":
      return "Chances de coup critique";
    case "motivation":
      return "Motivation";
    case "concentration":
      return "Concentration";
    default:
      return "Force"; 
  }
}

