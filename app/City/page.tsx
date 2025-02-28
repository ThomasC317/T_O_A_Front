"use client"

import React, { useState } from "react";
import VillageMap from "@/components/VillageMap/villageMap";
import VillageModal from "@/components/VillageModal/villageModal";
import Bank from "@/components/Bank/bank";
import Shop from "@/components/Shop/shop";
import ServantManagement from "@/components/servantManagement/servantManagement";

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
        </ul>
      </div>

      {/* Contenu principal */}
      <div style={{ flex: 1, padding: "20px" }}>
        {state === "villageMap" && <VillageMap />}
        {state === "villageModal" && <VillageModal />}
        {state === "bank" && <Bank />}
        {state === "shop" && <Shop />}
        {state === "servantManagement" && <ServantManagement />}
      </div>
    </div>
  );
}
