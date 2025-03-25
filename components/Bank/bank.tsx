// "use client";
// import React, { useState, useEffect } from "react";
// import { FantasyCard } from "@/components/fantasyCard";
// import { usePlayer } from "@/context/PlayerContext";
// import {
//   getItemCardBackgroundColor,
//   getQualityBorders,
//   getTextColor,
//   getTranslatedQuality,
// } from "@/utils/GameQualities";

// import { getTranslatedStat } from "@/utils/GameStats";
// import { GeneralType, ItemType, slotToItemType } from "@/utils/Item";

// import Modal from '@/components/modal';
// import { GameItem } from "@/context/ItemReducer";
// // import { useToggleEquipped } from "@/hooks/ItemHook";


// const Bank = () => {
//   const { state, dispatch } = usePlayer();
//   const [filter, setFilter] = useState(GeneralType.TOOL);
//   // const SetIsEquippedItem = useSetIsEquippedItem();
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

//   const [isMouseInsideIcon, setIsMouseInsideIcon] = useState(false);
//   const [isMouseInsideModal, setIsMouseInsideModal] = useState(false);

//   // const [items, setItems] = useState(state.gameItem.items);
//   const totalSlots = 36; // 12 slots per line × 3 lines
//   const [unequippedItems, setUnequippedItems] = useState(state.gameItem.items.filter(
//     (item) => !item.isEquipped && item.generalType === filter
//   ))
//   const handleSetFilter = (type: GeneralType) => {
//     setFilter(type);
//   };

//   const calculateTotalStats = (items) => {
//     return items.reduce((acc, item) => {
//       if (item.isEquipped) {
//         Object.entries(item.stats).forEach(([stat, value]) => {
//           acc[stat] = (acc[stat] || 0) + value;
//         });
//       }
//       return acc;
//     }, {});
//   };

//   const handleOpenModal = (event,item) => {
//     setIsMouseInsideIcon(true)
//     setHoveredItem(item)
  
//     const rect = event.currentTarget.getBoundingClientRect();
//     setModalPosition({ top: event.clientX, left:event.clientY });
//     setModalVisible(true);
//   };

//   const handleClose = () => {
//     setHoveredItem(null);
//      setModalVisible(false);
//      setIsMouseInsideModal(false)
//   };

//   const HandleItemClick =  useToggleEquipped();

//   useEffect(() => {
//     setUnequippedItems(
//       state.gameItem.items.filter(
//         (item) => !item.isEquipped && item.generalType === filter
//       ))
//     setItems(state.gameItem.items);
//   }, [state.gameItem.items]);

//   useEffect(() => {
//     setItems(state.gameItem.items);
//     setUnequippedItems(
//       state.gameItem.items.filter(
//         (item) => !item.isEquipped && item.generalType === filter
//       ))
//   }, [filter]);



//   useEffect(() => {
//     if(!isMouseInsideIcon && !isMouseInsideModal)
//       handleClose();
//   }, [isMouseInsideIcon,isMouseInsideModal]);

//   return (
//     <div className="flex flex-col h-screen">
//       <main className="flex flex-col items-center justify-center flex-1 img-bg p-6 ">
//         <FantasyCard>
//           <div className="flex flex-1">
//             <div className="text-white p-6">
//               {/* Main Content */}
//               <main className="grid p-4">
//                 {/* Equipment Section */}
//                 <section className="mb-2">
//                   {/* <h2 className="text-xl font-bold mb-4">Équipement</h2> */}
//                   <div className="grid grid-cols-[1fr_1fr] gap-4 bg-black p-6 menu-bar">
//                     <div className="grid grid-cols-[1fr_3fr_1fr_auto] gap-4 ">
//                       {/* Left Column */}
//                       <div className="flex flex-col justify-between space-y-4">
//                         {["head", "neck", "back", "chestplate", "belt"].map(
//                           (slot) => {
//                             const equippedItem = state.gameItem.items.find(
//                               (item) =>
//                                 item.type === slotToItemType[slot] &&
//                                 item.isEquipped
//                             );
//                             return (
//                               <div
//                                 key={slot}
//                                 className="relative rounded-lg flex items-center justify-center cursor-pointer"
//                                 onMouseEnter={(event) => handleOpenModal(event,equippedItem)}
//                                 onMouseLeave={() => setIsMouseInsideIcon(false)}
//                               >
//                                 <img
//                                   src={
//                                     equippedItem
//                                       ? equippedItem.icon
//                                       : `/${slot}_placeholder.png`
//                                   }
//                                   alt={slot}
//                                   width={50}
//                                   height={50}
//                                   className={`block placeholder_pictures ${
//                                     equippedItem
//                                       ? getQualityBorders(equippedItem.quality)
//                                       : ""
//                                   } `}
//                                 />
//                               </div>
//                             );
//                           }
//                         )}
//                       </div>

//                       {/* Middle Column (Tool) */}
//                       <div className="flex justify-center items-end">
//                         {["main_hand", "second_hand"].map((slot) => {
//                           const equippedItem = state.gameItem.items.find(
//                             (item, index) =>
//                               item.type === slotToItemType[slot] &&
//                               item.isEquipped
//                           );
//                           return (
//                             <div
//                               key={slot}
//                               className="relative rounded-lg flex items-center justify-center cursor-pointer"
//                               onMouseEnter={(event) => handleOpenModal(event,equippedItem)}
//                               onMouseLeave={() => setIsMouseInsideIcon(false)}
//                             >
//                               <img
//                                 src={
//                                   equippedItem
//                                     ? equippedItem.icon
//                                     : `/${slot}_placeholder.png`
//                                 }
//                                 alt={slot}
//                                 width={50}
//                                 height={50}
//                                 className={`block placeholder_pictures ${
//                                   equippedItem
//                                     ? getQualityBorders(equippedItem.quality)
//                                     : ""
//                                 }`}
//                               />
//                             </div>
//                           );
//                         })}
//                       </div>

//                       {/* Right Column */}
//                       <div className="flex flex-col justify-between space-y-4">
//   {/* Render boots slot */}
//   <div key="boots">
//     <div
//       className="relative rounded-lg flex items-center justify-center cursor-pointer"
//       onMouseEnter={(event) => {
//         const equippedBoots = state.gameItem.items.find(
//           (item) => item.isEquipped && item.type === ItemType.BOOTS
//         );
//         handleOpenModal(event,equippedBoots)}
//       }
//       onMouseLeave={() => setIsMouseInsideIcon(false)}
//     >
//       <img
//         src={
//           state.gameItem.items.find(
//             (item) => item.isEquipped && item.type === ItemType.BOOTS
//           )?.icon || "/boots_placeholder.png"
//         }
//         alt="boots"
//         width={50}
//         height={50}
//         className={`block placeholder_pictures ${
//           state.gameItem.items.find(
//             (item) => item.isEquipped && item.type === ItemType.BOOTS
//           )
//             ? getQualityBorders(
//                 state.gameItem.items.find(
//                   (item) => item.isEquipped && item.type === ItemType.BOOTS
//                 ).quality
//               )
//             : ""
//         }`}
//       />
//     </div>
//   </div>

//   {/* Render ring slots */}
//   {Array.from({ length: 2 }).map((_, index) => (
//     <div key={`ring-${index}`}>
//       <div
//         className="relative rounded-lg flex items-center justify-center cursor-pointer"
//         onMouseEnter={(event) => {
//           const equippedRing = state.gameItem.items.filter(
//             (item) => item.isEquipped && item.type === ItemType.RING
//           )[index];
//           handleOpenModal(event,equippedRing)}
//         }
//         onMouseLeave={() => setIsMouseInsideIcon(false)}
//       >
//         <img
//           src={
//             state.gameItem.items.filter(
//               (item) => item.isEquipped && item.type === ItemType.RING
//             )[index]?.icon || "/ring_placeholder.png"
//           }
//           alt="ring"
//           width={50}
//           height={50}
//           className={`block placeholder_pictures ${
//             state.gameItem.items.filter(
//               (item) => item.isEquipped && item.type === ItemType.RING
//             )[index]
//               ? getQualityBorders(
//                   state.gameItem.items.filter(
//                     (item) => item.isEquipped && item.type === ItemType.RING
//                   )[index].quality
//                 )
//               : ""
//           }`}
//         />
//       </div>
//     </div>
//   ))}

//   {/* Render artifact slots */}
//   {Array.from({ length: 2 }).map((_, index) => (
//     <div key={`artifact-${index}`}>
//       <div
//         className="relative rounded-lg flex items-center justify-center cursor-pointer"
//         onMouseEnter={(event) => {
//           const equippedArtifact = state.gameItem.items.filter(
//             (item) => item.isEquipped && item.type === ItemType.ARTIFACT
//           )[index];
//           handleOpenModal(event,equippedArtifact)}
//         }
//         onMouseLeave={() => setIsMouseInsideIcon(false)}
//       >
//         <img
//           src={
//             state.gameItem.items.filter(
//               (item) => item.isEquipped && item.type === ItemType.ARTIFACT
//             )[index]?.icon || "/artifact_placeholder.png"
//           }
//           alt="artifact"
//           width={50}
//           height={50}
//           className={`block placeholder_pictures ${
//             state.gameItem.items.filter(
//               (item) => item.isEquipped && item.type === ItemType.ARTIFACT
//             )[index]
//               ? getQualityBorders(
//                   state.gameItem.items.filter(
//                     (item) => item.isEquipped && item.type === ItemType.ARTIFACT
//                   )[index].quality
//                 )
//               : ""
//           }`}
//         />
//       </div>
//     </div>
//   ))}
// </div>
//                     </div>

//                     {/* Stats Column */}
//                     <div className="p-4 bg-gray-800 rounded-lg text-white menu-bar">
//                       <div className="space-y-2">
//                         {Object.entries(
//                           calculateTotalStats(state.gameItem.items)
//                         ).map(([stat, value]) => (
//                           <p
//                             className="text-green-300 text-sm"
//                             key={stat}
//                           >{`${getTranslatedStat(stat)}: +${value}`}</p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Inventory Section */}
//                 <section>
//                   <div className="bg-[#2b2b2b] rounded-lg p-6">
//                     <nav className="flex items-center gap-4 border-b border-[#3b3b3b] pb-4">
//                       <button
//                         className={`px-4 py-2 rounded-lg font-bold ${
//                           filter === GeneralType.TOOL
//                             ? "bg-[#3b3b3b] text-white"
//                             : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
//                         }`}
//                         onClick={() => handleSetFilter(GeneralType.TOOL)}
//                       >
//                         Outils
//                       </button>
//                       <button
//                         className={`px-4 py-2 rounded-lg font-bold ${
//                           filter === GeneralType.ARMOR
//                             ? "bg-[#3b3b3b] text-white"
//                             : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
//                         }`}
//                         onClick={() => handleSetFilter(GeneralType.ARMOR)}
//                       >
//                         Armure
//                       </button>
//                       <button
//                         className={`px-4 py-2 rounded-lg font-bold ${
//                           filter === GeneralType.CONSUMABLE
//                             ? "bg-[#3b3b3b] text-white"
//                             : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
//                         }`}
//                         onClick={() => handleSetFilter(GeneralType.CONSUMABLE)}
//                       >
//                         Consommables
//                       </button>
//                       <button
//                         className={`px-4 py-2 rounded-lg font-bold ${
//                           filter === GeneralType.CURRENCY
//                             ? "bg-[#3b3b3b] text-white"
//                             : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
//                         }`}
//                         onClick={() => handleSetFilter(GeneralType.CURRENCY)}
//                       >
//                         Monnaies
//                       </button>
//                     </nav>

//                     {/* Inventory Items */}
//                     <div className="grid inventory-grid mt-4 grid-cols-12 gap-2">
//       {Array.from({ length: totalSlots }).map((_, index) => {
//         const item = unequippedItems[index];
//         return item ? (
//           item.generalType == filter && (
//           <div
//             key={item.id}
//             onMouseEnter={(event) => handleOpenModal(event, item)}
//             onMouseLeave={() => setIsMouseInsideIcon(false)}
//             className="relative"
//           >
//             <img
//               src={item.icon}
//               alt="Item"
//               width={50}
//               height={50}
//               className={`border-2 ${getQualityBorders(item.quality)} cursor-pointer`}
//             />
//           </div>
//           )
//         ) : (
//           <div
//           style={{width:50,height:50}}
//             key={`empty-${index}`}
//             className="relative border-2 border-[#7a7a7a] bg-[#3b3b3b]"
//           >
//           </div>
//         );
//       })}
//     </div>
//                   </div>
//                 </section>
//               </main>
//             </div>
//           </div>
//           <Modal
//         isVisible={isModalVisible}
//         isMouseInside={() => setIsMouseInsideModal(true)}
//         onClose={() => setIsMouseInsideModal(false)}
//         position={modalPosition}
//       >
// {hoveredItem && (
//                               <div
//                                 className={`modal item-modal ml-4 w-64 p-4 modal-edge-adjust modal-bottom-adjust modal-edge-bottom-adjust ${getItemCardBackgroundColor(
//                                   hoveredItem.quality
//                                 )}  rounded-lg shadow-lg menu-bar ${getQualityBorders(
//                                   hoveredItem.quality
//                                 )}`}
//                               >
//                                 <h3
//                                   className={`text-lg font-bold mb-2 ${getTextColor(
//                                     hoveredItem.quality
//                                   )}`}
//                                 >
//                                   {hoveredItem.name}
//                                 </h3>
//                                 <div
//                                   className={`text-lg ${getTextColor(
//                                     hoveredItem.quality
//                                   )}`}
//                                 >
//                                   {getTranslatedQuality(hoveredItem.quality)}
//                                 </div>
//                                 <p className="text-[#7a7a7a] mb-4">
//                                   {hoveredItem.description}
//                                 </p>
//                                 <div className="bg-black flex flex-col mb-4 p-4">
//                                   {Object.entries(hoveredItem.stats).map(
//                                     ([key, value]) => (
//                                       <p
//                                         className="text-green-300 text-sm"
//                                         key={key}
//                                       >{`+ ${value} ${getTranslatedStat(
//                                         key
//                                       )}`}</p>
//                                     )
//                                   )}
//                                 </div>
//                                 {!hoveredItem.isEquipped ? (
//                                   <button
//                                     className="bg-[#c2a57f] text-[#1a1a1a] font-bold hover:bg-[#d2b57f]"
//                                     onClick={() => HandleItemClick(hoveredItem)}
//                                   >
//                                     Équiper
//                                   </button>
//                                 ) : (
//                                   <button
//                                     className="bg-[#c2a57f] text-[#1a1a1a] font-bold hover:bg-[#d2b57f]"
//                                     onClick={() => HandleItemClick(hoveredItem)}
//                                   >
//                                     Déséquiper
//                                   </button>
//                                 )}
//                               </div>
//                             )}
//       </Modal>
//         </FantasyCard>
//       </main>
//     </div>
//   );
// };

// export default Bank;

// function ToolIcon(props) {
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
//       <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 6a4 4 0 0 1 4 4v8h-8v-8a4 4 0 0 1 4-4zM4 16h4v4H4v-4zM16 16h4v4h-4v-4z" />
//     </svg>
//   );
// }

// function ArtifactIcon(props) {
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
//       <path d="M12 2L2 12l10 10 10-10L12 2zM12 4l8 8-8 8-8-8L12 4z" />
//     </svg>
//   );
// }

// function RingIcon(props) {
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
//       <circle cx="12" cy="12" r="6" />
//     </svg>
//   );
// }

// function BootsIcon(props) {
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
//       <path d="M5 14h4v6H5v-6zm10 0h4v6h-4v-6z" />
//     </svg>
//   );
// }

// function LegsIcon(props) {
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
//       <path d="M8 6h8v12H8V6zm1 2v8h6V8H9z" />
//     </svg>
//   );
// }

// function BeltIcon(props) {
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
//       <path d="M5 6v12h14V6H5zm1 1h12v10H6V7zm4 0v10h4V7h-4z" />
//     </svg>
//   );
// }

// function ChestplateIcon(props) {
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
//       <path d="M5 3l1 2h12l1-2h4v6H1V3h4zm0 6h14v10H5V9zm1 1v8h12v-8H6z" />
//     </svg>
//   );
// }

// function CapeIcon(props) {
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
//       <path d="M5 4a2 2 0 0 1 4 0v16a2 2 0 0 1-4 0V4zm10 0a2 2 0 0 1 4 0v16a2 2 0 0 1-4 0V4z" />
//     </svg>
//   );
// }

// function ShouldersIcon(props) {
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
//       <path d="M3 7l3 5 5-2 5 2 5-5 3 5v6h-16v-6z" />
//     </svg>
//   );
// }

// function NeckIcon(props) {
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
//       <path d="M7 2a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4A4 4 0 0 1 7 2zM7 22h10V14H7v8z" />
//     </svg>
//   );
// }

// function HeadIcon(props) {
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
//       <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5zM4 10a8 8 0 0 1 16 0v2a4 4 0 0 1-8 0v-2z" />
//     </svg>
//   );
// }
