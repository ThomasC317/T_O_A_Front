"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usePlayerStatsUpdater from "@/hooks/PlayerResourceHook";
import usePlayerLevelUpdater from "@/hooks/PlayerLevelHook";
import { useVillagerResources } from "@/hooks/FarmerResourceHook";
// import { useItemsResources } from "@/hooks/ItemHook";
import { usePlayer } from "@/context/PlayerContext";
import { memo, useCallback, useEffect } from "react";
import useShop from "@/hooks/ShopHook";

import usePlayerStatsEffects from "@/hooks/PlayerStatsHook";
import { useServantResources } from "@/hooks/ServantResourceHook";
import { useInitGame } from "@/hooks/InitHook";


const Navbar = () => {
usePlayerStatsUpdater();
usePlayerLevelUpdater();
usePlayerStatsEffects();
useVillagerResources();
useServantResources();
useInitGame();
// useItemsResources();
useShop();

  const router = useRouter();
  const { state } = usePlayer();

  // Memoize the click handler
  const handleButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header className="justify-center items-center">
      <nav className="warcraft-nav flex items-center gap-10 p-body-pageContent justify-center relative">
      <div className="flex flex-row items-center">
        <img src="/arcanum.png" width={40} height={40}/>
        <div className="text-lg font-semibold"> {state.village.resource} </div>
        </div>
        <div className="flex flex-row items-center">
        <div className="text-lg font-semibold"> {state.village.resourcePerSecond}  </div>
        <img src="/arcanum.png" width={40} height={40}/>
        <div className="text-lg font-semibold"> /s </div>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer"  onClick={handleButtonClick}>
          <div className="hexagon">
            <img src="/GameLogo.png" alt="Portrait" className="hexagon-img" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="text-lg font-semibold">Niveau {state.village.level} </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
        <div className="text-lg font-semibold"> total : {state.village.totalResource}  </div>
        <img src="/arcanum.png" width={40} height={40}/>
        <div className="text-lg font-semibold"> </div>
        </div>

        <div className="flex flex-row items-center">
        <div className="text-lg font-semibold"> total : {state.village.totalResource}  </div>
 
        <div className="text-lg font-semibold"> </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;