import { usePlayer } from '@/context/PlayerContext';
import { getTranslatedStat } from '@/utils/GameStats';
import { getItemCardBackgroundColor, getQualityBorders, getTextColor, getTranslatedQuality, qualityOrder } from '@/utils/GameQualities';
import React, { useState } from 'react';

const ServantManagement= ({
}) => {
  const { state, dispatch } = usePlayer();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const servants = state.farmerStats.servants;
  const totalItems = servants.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [selectedServant, setSelectedServant] = useState(servants[0]);
  return (
    <div className="flex flex-col p-2">
    {/* Center and display the selected servant card on top */}
    {selectedServant && (
      <div className="flex justify-center mb-4">
        <div
          className={`w-80 p-4 modal-edge-adjust modal-bottom-adjust modal-edge-bottom-adjust ${getItemCardBackgroundColor(
            selectedServant.quality
          )} rounded-lg shadow-lg menu-bar ${getQualityBorders(selectedServant.quality)}`}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center aspect-square w-[60px] ${getQualityBorders(
                selectedServant.quality
              )}`}
            >
              <img
                className="w-8 h-8 text-primary-foreground"
                src={`${selectedServant.icon}`}
              />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${getTextColor(selectedServant.quality)}`}>
              {selectedServant.name}
            </h3>
          </div>
          <div className={`text-lg ${getTextColor(selectedServant.quality)}`}>
            {getTranslatedQuality(selectedServant.quality)}
          </div>
          <p className="text-[#7a7a7a] mb-4">{selectedServant.description}</p>
          <div className="bg-black flex flex-col mb-4 p-4">
            {Object.entries(selectedServant.stats).map(([key, value]) => (
              <p className="text-green-300 text-sm" key={key}>
                {`+ ${value} ${getTranslatedStat(key)}`}
              </p>
            ))}
          </div>
        </div>
      </div>
    )}
  
    {/* Display the grid of servants with a maximum of 12 per page */}
    <div className="flex flex-wrap gap-2 w-[800px]">
      {servants
        .sort((a, b) => qualityOrder[b.quality] - qualityOrder[a.quality])
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 w-[23%] cursor-pointer ${
              item && selectedServant === item ? 'menu-bar-selected' : 'menu-bar'
            }`}
            onClick={() => setSelectedServant(item)}
          >
            <div className="flex items-center justify-center aspect-square w-[60px]">
              <img className="w-8 h-8 text-primary-foreground" src={`${item.icon}`} />
            </div>
            <h3 className={`text-base font-bold mb-2 ${getTextColor(item.quality)}`}>
              {item.name}
            </h3>
          </div>
        ))}
    </div>
  
    {/* Pagination controls */}
    <div className="flex justify-center mt-4">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-l"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <LeftArrow />
      </button>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-r"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <RightArrow />
      </button>
    </div>
  </div>
  );
};

const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
  
  const LeftArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );

export default ServantManagement;
