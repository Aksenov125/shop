import type { SetStateAction } from 'react';



type ModalWindowProps = {
  isOpen: boolean;
  onClose: (value: SetStateAction<boolean>) => void;
 
};


function ModalWindow({ isOpen,  onClose }: ModalWindowProps): JSX.Element | null {
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