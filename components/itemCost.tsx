import { usePlayer } from "@/context/PlayerContext";
import { useEffect, useState } from "react";

export function ItemCost({ value }) {
  const { state } = usePlayer();
  const [textColor, setTextColor] = useState("text-white");
  useEffect(() => {
    if (state.playerStats.resource >= value) setTextColor("text-white");
    else setTextColor("text-red-500");
  }, [state.playerStats.resource]);
  return (
    <div className="flex items-center text-sm">
      <span className={textColor}>{value}</span>
      <img src="/arcanum.png" width={20} height={20} alt="arcanum" />
    </div>
  );
}
