import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useState } from "react";
import { TextureLoader } from "three";
import { VillageCard } from "../villageCard";

function Map() {    
    const mapTexture = useLoader(TextureLoader, "/map.png");
    console.log("Texture chargée :", mapTexture); // Debug
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial map={mapTexture} />
      </mesh>
    );
  }
  function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div style={modalStyle}>
        <div style={modalContentStyle}>
          <h2>Bienvenue dans le village !</h2>
          <button onClick={onClose}>Fermer</button>
        </div>
      </div>
    );
  }
  
  // Style de la modal
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };
  

  function Village({ position = [0, 0.01, 0], onClick  }) {
    const cityTexture = useLoader(TextureLoader, "/city.png");
  
    return (
      <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} onClick={onClick}>
        <planeGeometry args={[3, 2]} /> {/* Ajuste la taille */}
        <meshStandardMaterial   
       map={cityTexture} 
       transparent={true}
       opacity={1}         
       alphaTest={0.5}   
       depthWrite={false}
        />
      </mesh>
    );
  }
  
  

export default function MainMap() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleVillageClick = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100vw', height: '100vh' }}>
          <VillageCard></VillageCard>
<Canvas   style={{ width: "100%", height: "100%" }}  // Taille pleine de l'écran
      orthographic
      camera={{
        position: [0, 20, 0],
        zoom: 150,
        near: 0.1,
        far: 200
      }}>

<ambientLight intensity={1.5} />
<directionalLight position={[5, 10, 5]} intensity={2} />

    <Map />
    <Village position={[0, 0.00, -1.5]} onClick={handleVillageClick} /> 

    <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} />
  </Canvas>

 <Modal isOpen={isModalOpen} onClose={handleModalClose} />
 </div>
  );
}