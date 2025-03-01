"use client";
import { useEffect, useState } from "react";
import { addFarmer, addItem, AddServant, removeFarmer, removeServant, setResource, usePlayer } from "@/context/PlayerContext";
import {
  GameQualities,
  getItemCardBackgroundColor,
  getQualityBorders,
  getTextColor,
  getTranslatedQuality,
} from "@/utils/GameQualities";
import { GeneralType } from "@/utils/Item";
import { FantasyCard } from "@/components/fantasyCard";
import Modal from "@/components/modal";
import { getTranslatedStat } from "@/utils/GameStats";
import { ItemCost } from "@/components/itemCost";

const Shop = () => {
  const totalSlots = 36; // 12 slots per line × 3 lines
  const { state, dispatch } = usePlayer();
  const [filter, setFilter] = useState(GeneralType.TOOL);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isMouseInsideIcon, setIsMouseInsideIcon] = useState(false);
  const [isMouseInsideModal, setIsMouseInsideModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const sellers = [
    {
      id: 1,
      icon: "goblin_seller.png",
      name: 'Grivlak "Doigts de Cuivre"',
      description: `Grivlak est né dans les sombres allées du marché noir de Grishnak, un lieu où seuls les plus rusés survivent. Il a rapidement appris l'art du troc et du mensonge, se taillant une réputation en vendant des objets rares, souvent obtenus de manière... douteuse. On dit que Grivlak a conclu un pacte avec un ancien esprit de la ruse, ce qui lui confère une chance insolente et un instinct infaillible pour repérer les bonnes affaires.`,
      quality: GameQualities.EPIC,
    },
    {
      id: 2,
      icon: "void_seller.png",
      name: "Vayren l'émissaire",
      description:
        "Vayren a été invoqué des profondeurs du Vide par un ancien ordre de sorciers désespérés cherchant à exploiter le pouvoir du néant pour dominer les mondes. Mais ils ont sous-estimé la force qu’ils manipulaient. Vayren, bien plus que l’esclave qu’ils espéraient, a corrompu les esprits de ses invocateurs, les poussant à s'entredéchirer. Seul survivant, Vayren a été libéré, errant désormais à travers les royaumes, porteur de messages cryptiques et de sombres promesses.",
      quality: GameQualities.LEGENDARY,
    },
    {
      id: 3,
      icon: "basic_seller.png",
      name: "Alaric le messager",
      description:
        "Né dans une famille de nobles modestes, Alaric a grandi en écoutant les récits de diplomatie et de guerre de son père, un ancien chevalier devenu conseiller du roi. Dès son plus jeune âge, il montra un talent pour la négociation et une aptitude à dénouer les conflits. Alaric a rapidement gravi les échelons de la cour, se taillant une réputation de diplomate incorruptible. Après avoir résolu plusieurs querelles entre les puissants du royaume, il fut nommé émissaire des Royaumes Unis, chargé de porter les messages les plus cruciaux entre les nations alliées et ennemies.",
      quality: GameQualities.UNCOMMON,
    },
  ];

  const [tools] = useState(state.shopState.tools);
  const [armors] = useState(state.shopState.armors);
  const [farmers] = useState(state.shopState.farmers);
  const [servants] = useState(state.shopState.servants);

  // Function to toggle equipped state
  const buyItem = (item) => {
    console.log("filter ? " +filter)
    if (item.value <= state.playerStats.resource) {
      switch(filter) {
        case GeneralType.ARMOR,GeneralType.TOOL:
          console.log("item buy ???")
          dispatch(addItem(item));
          dispatch(setResource(-item.value));
          break;
        case GeneralType.FARMERS:
          console.log("farmer")
          dispatch(addFarmer(item));
          dispatch(setResource(-item.value));
          dispatch(removeFarmer(item))
          break;
        case GeneralType.SERVANTS:
          dispatch(AddServant(item));
          dispatch(setResource(-item.value))
          dispatch(removeServant(item))
        default:
          console.log("default")

      }
      handleClose();
    }
  };


  useEffect(() => {
    console.log(state.gameItem.items)
  }, [state.gameItem.items]);

  const getShopItemsByFilter = (filter: GeneralType) => {
    console.log(filter)
    switch (filter) {
      case GeneralType.ARMOR:
        return state.shopState.armors;
      case GeneralType.TOOL:
        return state.shopState.tools;
      case GeneralType.FARMERS:
        return state.shopState.displayedFarmers;
      case GeneralType.SERVANTS:
        return state.shopState.displayedServants;
      default:
        return []; 
    }
  };
  const filteredItems = getShopItemsByFilter(filter);
  const [unequippedItems, setUnequippedItems] = useState(
    state.gameItem.items.filter(
      (item) => !item.isEquipped && item.generalType === filter
    )
  );
  const [selectedSeller, setSelectedSeller] = useState(sellers[0]);

  // Example handler to select a seller
  const handleSelectSeller = (seller) => {
    setSelectedSeller(seller);
  };
  useEffect(() => {
    console.log(
      state.gameItem.items.filter(
        (item) => !item.isEquipped && item.generalType === filter
      ).length
    );
    // setItems(state.gameItem.items);
    setUnequippedItems(
      state.gameItem.items.filter(
        (item) => !item.isEquipped && item.generalType === filter
      )
    );
  }, [filter]);

  const handleOpenModal = (event, item) => {
    console.log(item);
    setIsMouseInsideIcon(true);
    setHoveredItem(item);

    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top: event.clientX, left: event.clientY });
    setModalVisible(true);
  };
  const handleClose = () => {
    setHoveredItem(null);
    setModalVisible(false);
    setIsMouseInsideModal(false);
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    if (!isMouseInsideIcon && !isMouseInsideModal) handleClose();
  }, [isMouseInsideIcon, isMouseInsideModal]);

  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-col flex-1 img-bg p-6">
        <div className="flex flex-row rounded-lg p-6 gap-6 max-w-7xl mx-auto">
          {/* Shop Section */}

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filter Menu */}
            <FantasyCard>
              <div className="flex flex-row bg-[#2b2b2b] rounded-lg p-6 menu-bar w-full md:w-auto">
                <div className="flex flex-col items-center gap-4 md:mr-4">
                  <button
                    className={`px-4 py-2 rounded-lg font-bold w-full ${
                      filter === GeneralType.TOOL
                        ? "bg-[#3b3b3b] text-white"
                        : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
                    }`}
                    onClick={() => setFilter(GeneralType.TOOL)}
                  >
                    Outils
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg font-bold w-full ${
                      filter === GeneralType.ARMOR
                        ? "bg-[#3b3b3b] text-white"
                        : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
                    }`}
                    onClick={() => setFilter(GeneralType.ARMOR)}
                  >
                    Armure
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg font-bold w-full ${
                      filter === GeneralType.FARMERS
                        ? "bg-[#3b3b3b] text-white"
                        : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
                    }`}
                    onClick={() => setFilter(GeneralType.FARMERS)}
                  >
                    Farmers
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg font-bold w-full ${
                      filter === GeneralType.SERVANTS
                        ? "bg-[#3b3b3b] text-white"
                        : "text-[#7a7a7a] hover:bg-[#3b3b3b] hover:text-white"
                    }`}
                    onClick={() => setFilter(GeneralType.SERVANTS)}
                  >
                    Servants
                  </button>
                </div>
                {/* Shop */}
                <div className="flex flex-col ">
                  <div className="flex flex-row items-center space-x-4 mx-auto mb-6 menu-bar w-full p-4">
                    <div className="bg-primary flex items-center justify-center aspect-square w-[60px]">
                      <img
                        className="w-8 h-8 text-primary-foreground"
                        src={`${selectedSeller.icon}`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-bold mb-2 ${getTextColor(
                        selectedSeller.quality
                      )}`}
                    >
                      Boutique de {selectedSeller.name}
                    </h3>
                  </div>
                  <div className="flex flex-row p-4">
                    <div className="pb-4">
                      <div className="flex flex-col">
                        <div className="flex flex-wrap gap-2">
                          {filteredItems.map((item, index) =>
                           item ? (
                                    <div
                                      key={item.id}
                                      className="relative flex items-center"
                                      style={{
                                        maxWidth: "calc(33.33% - 8px)",
                                        flexBasis: "calc(33.33% - 8px)",
                                      }} // Ensure max 3 per row
                                      onMouseEnter={(event) =>
                                        handleOpenModal(event, item)
                                      }
                                      onMouseLeave={() =>
                                        setIsMouseInsideIcon(false)
                                      }
                                    >
                                      <img
                                        src={item.icon}
                                        alt="Item"
                                        width={50}
                                        height={50}
                                        className={`border-2 ${getQualityBorders(
                                          item.quality
                                        )} cursor-pointer`}
                                      />
                                      <div className="ml-2 flex flex-col">
                                        <h3
                                          className={`text-sm font-bold ${getTextColor(
                                            item.quality
                                          )}`}
                                          style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "120px", // Adjust max-width as needed
                                          }}
                                        >
                                          {item.name}
                                        </h3>
                                        <ItemCost value={item.value}></ItemCost>
                                      </div>
                                    </div>
                          ):null)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
  isVisible={isModalVisible}
  isMouseInside={() => setIsMouseInsideModal(true)}
  onClose={() => setIsMouseInsideModal(false)}
  position={modalPosition}
>
  {hoveredItem && (
    <div
      className={`modal item-modal ml-4 w-64 p-4 modal-edge-adjust modal-bottom-adjust modal-edge-bottom-adjust ${getItemCardBackgroundColor(
        hoveredItem.quality
      )} rounded-lg shadow-lg menu-bar ${getQualityBorders(
        hoveredItem.quality
      )}`}
    >
      {/* Titre de l'item */}
      <h3
        className={`text-lg font-bold mb-2 ${getTextColor(
          hoveredItem.quality
        )}`}
      >
        {hoveredItem.name}
      </h3>

      {/* Qualité traduite */}
      <div
        className={`text-lg ${getTextColor(hoveredItem.quality)}`}
      >
        {getTranslatedQuality(hoveredItem.quality)}
      </div>

      {/* Description */}
      <p className="text-[#7a7a7a] mb-4">{hoveredItem.description}</p>

      {/* Affichage dynamique */}
      {filter === GeneralType.FARMERS ? (
        <div className="flex text-sm text-muted-foreground items-center mb-4">
          <p className="mr-2">{hoveredItem.resourcePerSecond}</p>
          <img src="/arcanum.png" width={30} height={30} alt="arcanum" />
          <span>/s</span>
        </div>
      ) : (
        <div className="bg-black flex flex-col mb-4 p-4">
          {Object.entries(hoveredItem.stats).map(([key, value]) => (
            <p
              className="text-green-300 text-sm"
              key={key}
            >{`+ ${value} ${getTranslatedStat(key)}`}</p>
          ))}
        </div>
      )}

      {/* Bouton Acheter */}
      <button
        className="bg-[#c2a57f] text-[#1a1a1a] font-bold hover:bg-[#d2b57f] disabled:bg-[#c2a57f]"
        onClick={() => buyItem(hoveredItem)}
        disabled={hoveredItem.value > state.playerStats.resource}
      >
        Acheter
      </button>
    </div>
  )}
</Modal>
              </div>
            </FantasyCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
