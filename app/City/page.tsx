"use client"

import React, {useEffect, useRef} from "react";

import dynamic from "next/dynamic";
import MainMap from "@/components/MainMap/mainMap";
import { VillageCard } from "@/components/villageCard";
import VillageMap from "@/components/VillageMap/villageMap";
import VillageModal from "@/components/VillageModal/villageModal";

export default function City() {


  return (
    <div style={{overflow:"hidden", height:"92vh", width:"100vw"}}>
      {/* <VillageMap></VillageMap> */}
      <VillageModal></VillageModal>
    </div>
  );
}
