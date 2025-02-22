"use client"
import { FantasyCard } from './fantasyCard';
// import { usePlayer, SetSkillIsActive } from '../../context/PlayerContext';
import { useCallback, useEffect } from "react";
// import SkillButton from "./skill-button";
import { useRouter } from "next/navigation";

export function VillageCard() {
//   const { state ,dispatch } = usePlayer();
  const router = useRouter();
  const handleOnTalentClickk = useCallback(() => {
    router.push("/statupgrade");
  }, [router]);

  const handleOnInventoryClick = useCallback(() => {
    router.push("/inventory");
  }, [router]);

  const handleOnVillageClick = useCallback(() => {
    router.push("/village");
  }, [router]);

  const handleOnShopClick = useCallback(() => {
    router.push("/shop");
  }, [router]);

  const handleOnApogeeClick = useCallback(() => {
    router.push("/apogee");
  }, [router]);

  return (
    <FantasyCard>
    <div className=" mx-auto p-2 bg-gray-800 rounded-lg" style={{marginTop:"2rem"}}>
      <div className="flex items-center justify-between p-2 bg-gray-900 rounded-t-lg">
        <div className="flex items-center gap-6 justify-between w-full">
  



        </div>
      </div>
      <div className="p-2 bg-gray-700">
        <div className="relative mb-2 flex flex-row gap-6">
        {/* <SkillButton skill={state.playerStats.skills[0]}></SkillButton>
        <SkillButton skill={state.playerStats.skills[1]}></SkillButton> */}

        </div>
      </div>
      <div className="p-2 bg-gray-900 rounded-b-lg">
        <div className="flex justify-between text-white">
        <button
                className="px-4 py-2 rounded-lg border border-secondary" onClick={() => handleOnInventoryClick()}
              >
                Inventaire
              </button>
              <button
                className="px-4 py-2 rounded-lg border border-secondary" onClick={() => handleOnTalentClickk()}
              >
                Talents
              </button>
              <button
                className="px-4 py-2 rounded-lg border border-secondary" onClick={() => handleOnVillageClick()}
              >
                Village
              </button>
              <button
                className="px-4 py-2 rounded-lg border border-secondary" onClick={() => handleOnShopClick()}
              >
                Shop
              </button>
              <button
                className="px-4 py-2 rounded-lg border border-secondary" onClick={() => handleOnApogeeClick()}
              >
                Apogée
              </button>
        </div>
      </div>
    </div>
    </FantasyCard>
  )
}