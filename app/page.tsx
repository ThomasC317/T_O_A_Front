"use client"

import React, {useEffect, useRef} from "react";

import dynamic from "next/dynamic";
import MainMap from "@/components/MainMap/mainMap";
import { VillageCard } from "@/components/villageCard";

export default function Home() {


  return (
    <div style={{overflow:"hidden", height:"92vh", width:"100vw"}}>
      <MainMap />
 
    </div>
  );
}
