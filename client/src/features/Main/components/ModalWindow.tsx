
import { useState } from 'react';
import './modal.scss';



function ModalWindow(): JSX.Element | null {
    const [isOpen, onClose] = useState(false);
    if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          
         <button onClick={() => onClose((prev) => !prev)}>Close </button>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;