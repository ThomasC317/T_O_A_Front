import Tippy from '@tippyjs/react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isVisible, onClose, position, children, isMouseInside }) => {
  const modalRef = useRef(null);

  const [modalPosition, setModalPosition] = useState(position);
  const [modalDimensions, setModalDimensions] = useState({ width: 0, height: 0 });

  // Effect to measure the modal dimensions after rendering
  useLayoutEffect(() => {
    if (isVisible && modalRef.current) {
      const modalElement = modalRef.current;
      setModalDimensions({
        width: modalElement.offsetWidth,
        height: modalElement.offsetHeight,
      });
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && modalRef.current) {
      const modalElement = modalRef.current;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const modalWidth = modalDimensions.width;
      const modalHeight = modalDimensions.height;

      const { top: initialTop, left: initialLeft } = position;

      // Default position (right of the item)
      let top = initialTop;
      let left = initialLeft + 10; // Offset to the right

      // Adjust position if the modal overflows the right edge
      if (left + modalWidth > windowWidth) {
        left = initialLeft - modalWidth - 10; // Offset to the left
      }

      // Adjust position if the modal overflows the bottom edge
      if (top + modalHeight > windowHeight) {
        top = windowHeight - modalHeight - 10; // Offset from the bottom
      }

      // Adjust if the modal goes above the viewport (e.g., near the top)
      if (top < 0) {
        top = initialTop + 10; // Offset below the item
      }
      left = left - 200
      setModalPosition({ top, left });
    }
  }, [isVisible, position, modalDimensions]);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div 
      ref={modalRef} 
      onMouseEnter={isMouseInside}
      onMouseLeave={onClose}
      style={{
        position: 'absolute',  // Ensure the modal is positioned absolutely
        zIndex: 1000,
        top:modalPosition.left,
        left: modalPosition.top         // Make sure the modal appears on top
      }}
    >
      <Tippy placement="bottom">
        <div>
          {children}
        </div>
      </Tippy>
      {/* Add a close button or logic here if necessary */}
    </div>,
    document.body
  );
};

export default Modal;