"use client"
import { FantasyCard } from './fantasyCard';
// import { usePlayer, SetSkillIsActive } from '../../context/PlayerContext';
import { useCallback, useEffect } from "react";
// import SkillButton from "./skill-button";
import { useRouter } from "next/navigation";

export function VillageCard() {
//   const { state ,dispatch } = usePlayer();
  const router = useRouter();

  const handleOnCityManageClick = useCallback(() => {
    router.push("/City");
  }, [router]);


  return (
  
    <div className=" mx-auto p-2 bg-gray-800 rounded-lg" style={{marginTop:"2rem", position:"absolute", bottom:"5rem", left:"50%", transform:"translateX(-50%)", zIndex:10}}>
      <div className="flex items-center justify-between p-2 bg-gray-900 rounded-t-lg">
        <div className="flex items-center gap-6 justify-between w-full">
          5
        </div>
      </div>
      <div className="p-2 bg-gray-700">
        <div className="relative mb-2 flex flex-row gap-6">
            Hurlevent
        </div>
      </div>
      <div className="p-2 bg-gray-900 rounded-b-lg">
        <div className="flex justify-between text-white">
        <button
                className="px-4 py-2 rounded-lg border border-secondary" onClick={() => handleOnCityManageClick()}
              >
                Gérer le village
              </button>
        </div>
      </div>
    </div>
  
  )
}