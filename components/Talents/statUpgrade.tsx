  // import {
  //   // setPlayerStats,
  //   // SetStatsPoints,
  //   usePlayer,
  // } from "@/context/PlayerContext";
  // import { useEffect, useState } from "react";
  // import { GameStats } from "@/utils/GameStats";
  
  // export function StatUpgradeForm() {
  //   const { state, dispatch } = usePlayer();
    
  //   // Initialize the gameStats state
  //   const [gameStats, setGameStats] = useState<GameStats>(state.playerStats.stats);
  
  //   // Function to update a stat
  //   const updateStat = (stat: keyof GameStats, value: number) => {
  //     dispatch(SetStatsPoints(value * -1));
  //     setGameStats((prevStats) => ({
  //       ...prevStats,
  //       [stat]: prevStats[stat] + value,
  //     }));
  //   };
  
  //   // Function to save the stats
  //   const handleStatsSave = () => {
  //     const differences: Partial<GameStats> = {};
    
  //     // Iterate over each stat in gameStats to compare with the original stats
  //     Object.keys(gameStats).forEach((key) => {
  //       const statKey = key as keyof GameStats;
  //       const originalStat = state.playerStats.stats[statKey];
  //       const currentStat = gameStats[statKey];
    
  //       if (currentStat !== originalStat) {
  //         differences[statKey] = currentStat - originalStat;
      
  //       }
  //     });
  //     if (Object.keys(differences).length > 0) {
  //       dispatch(setPlayerStats(differences, "add"));
  //     }
  
  //   };
  
  //   useEffect(() => {
  //     setGameStats(state.playerStats.stats);
  //   },[state.playerStats.stats])
  
  //   // Determine if save button should be disabled
  //   const isSaveDisabled = Object.values(gameStats).every((value) => value === 0);
  
  //   return (
  //     <div className="grid gap-4 bg-black p-6 menu-bar w-[500px]">
  //       <div>
  //         <h3 className="text-lg font-bold mb-2">Amélioration de statistiques</h3>
  //         <h2>Allouer vos points de compétences ici.</h2>
  //       </div>
  //       <div className="grid gap-4">
  //         {Object.entries(gameStats).map(([statName, statValue]) => (
  //           <div key={statName} className="grid grid-cols-2 items-center gap-2">
  //             <div className="font-medium capitalize text-white">
  //               {getStatDisplayName(statName)}
  //             </div>
  //             <div className="flex items-center justify-end">
  //               <button
  //                 disabled={statValue === 0}
  //                 onClick={() => updateStat(statName as keyof GameStats, -1)}
  //               >
  //                 <MinusIcon className="w-4 h-4" />
  //               </button>
  //               <div className="text-center font-bold w-10 text-white">
  //                 {/* Display character base stat + allocated stat */}
  //                 {statValue}
  //               </div>
  //               <button
  //                 disabled={state.talentState.statPoints === 0}
  //                 onClick={() => updateStat(statName as keyof GameStats, 1)}
  //               >
  //                 <PlusIcon className="w-4 h-4" />
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="flex items-center justify-between">
  //         <div className="text-muted-foreground">
  //           Points à attribuer:{" "}
  //           <span className="font-bold">{state.talentState.statPoints}</span>
  //         </div>
  //         <button onClick={handleStatsSave} disabled={isSaveDisabled}>
  //           Sauvegarder
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
  
  // // Function to get the display name of the stat
  // function getStatDisplayName(statName: string) {
  //   const statNames = {
  //     strength: "Force",
  //     intelligence: "Intelligence",
  //     agility: "Agilité",
  //     stamina: "Endurance",
  //     charisma: "Charisme",
  //     criticalChances: "Chance de Coup Critique",
  //     motivation: "Motivation",
  //     concentration: "Concentration",
  //   };
  //   return statNames[statName] || statName;
  // }
  
  // // MinusIcon component
  // function MinusIcon(props: any) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M5 12h14" />
  //     </svg>
  //   );
  // }
  
  // // PlusIcon component
  // function PlusIcon(props: any) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M5 12h14" />
  //       <path d="M12 5v14" />
  //     </svg>
  //   );
  // }
  