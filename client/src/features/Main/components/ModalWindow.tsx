import { useState, type SetStateAction } from 'react';
import './modalWindow.scss';
import { useAppDispatch } from '../../../store/store';
import { createCategory } from '../mainPageSlice';

type ModalWindowProps = {
  isOpen: boolean;
  onClose: (value: SetStateAction<boolean>) => void;
};

function ModalWindow({ isOpen, onClose }: ModalWindowProps): JSX.Element | null {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const category = { title };
            dispatch(createCategory(category)).catch(console.log);
            
            setTitle('')
      };
  if (!isOpen) {``
    return null;
  }

 
  
  return (
    <div className="modal-overlay">
        <form className="form__registration" onSubmit={onHandleSubmit}>
      <label htmlFor="title">
          <input
            type="text"
            name="title"
            placeholder="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
   <button type="submit"  >добавить</button>
   <button onClick={() => onClose((prev) => !prev)}>закрыть окно</button>
   </form>
    </div>
  );
}


export default ModalWindow;