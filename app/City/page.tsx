"use client"

import React, { useState } from "react";
import VillageMap from "@/components/VillageMap/villageMap";
import VillageModal from "@/components/VillageModal/villageModal";
// import Bank from "@/components/Bank/bank";
import Shop from "@/components/Shop/shop";
import ServantManagement from "@/components/servantManagement/servantManagement";
// import { StatUpgradeForm } from "@/components/Talents/statUpgrade";
import ApogeeLevel from "@/components/Apogee/apogeeManagement";

export default function City() {
  const [state, setState] = useState("closed");

  const handlePageChange = (page) => {
    setState(page);
  };

  return (
    <div style={{ display: "flex", height: "92vh", width: "100vw" }}>
      {/* Menu latéral */}
      <div style={{ width: "200px", backgroundColor: "#333", color: "white", padding: "10px" }}>
        <h3>Menu</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li onClick={() => handlePageChange("villageMap")} style={{ cursor: "pointer", padding: "10px", backgroundColor: state === "villageMap" ? "#555" : "transparent" }}>
            Village Map
          </li>
          <li onClick={() => handlePageChange("villageModal")} style={{ cursor: "pointer", padding: "10px", backgroundColor: state === "villageModal" ? "#555" : "transparent" }}>
            Gestion des Farmers
          </li>
          <li onClick={() => handlePageChange("bank")} style={{ cursor: "pointer", padding: "10px", backgroundColor: state === "bank" ? "#555" : "transparent" }}>
            Bank
          </li>
          <li onClick={() => handlePageChange("shop")} style={{ cursor: "pointer", padding: "10px", backgroundColor: state === "shop" ? "#555" : "transparent" }}>
            Shop
          </li>
          <li onClick={() => handlePageChange("servantManagement")} style={{ cursor: "pointer", padding: "10px", backgroundColor: state === "servantManagement" ? "#555" : "transparent" }}>
            Gestion des serviteurs
          </li>
          <li onClick={() => handlePageChange("skillManagement")} style={{ cursor: "pointer", padding: "10px", backgroundColor: state === "skillManagement" ? "#555" : "transparent" }}>
            Points de talents
          </li>
          <li onClick={() => handlePageChange("apogeeManagement")} style={{ cursor: "pointer", padding: "10px", backgroundColor: state === "apogeeManagement" ? "#555" : "transparent" }}>
            Tour de l'apogée
          </li>
        </ul>
      </div>

      {/* Contenu principal */}
      <div style={{ flex: 1, padding: "20px" }}>
        {state === "villageMap" && <VillageMap />}
        {state === "villageModal" && <VillageModal />}
        {/* {state === "bank" && <Bank />} */}
        {state === "shop" && <Shop />}
        {state === "servantManagement" && <ServantManagement />}
        {/* {state === "skillManagement" && <StatUpgradeForm />} */}
        {state === "apogeeManagement" && <ApogeeLevel />}
      </div>
    </div>
  );
}
