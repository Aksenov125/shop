import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';

import { RootState } from '../../../store/store';
import { categoriesThunk, removeCategory } from '../mainPageSlice';

import CategoriesList from '../../Catalog/CategoryList';


function MainPage(): JSX.Element {
    
     
    const categories = useSelector((store: RootState) => store.categories.categories);
    
    console.log(categories);
    
    return (
        <div>
            <CategoriesList></CategoriesList>
        </div>
    );

import ModalWindow from './ModalWindow';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(prev => !prev);
  useEffect(() => {
    dispatch(categoriesThunk()).catch(console.log);
  }, [dispatch]);
  const removeCategories = async (id: number) => {
    await dispatch(removeCategory(id)).catch(console.log);
    dispatch(categoriesThunk()).catch(console.log);
  };

  const categories = useSelector((store: RootState) => store.categories.categories);


  


return (
  <div>
    
    <button onClick={toggleModal}>Открыть модальное окно</button>
    <ModalWindow isOpen={isModalOpen} onClose={setIsModalOpen} />
    {categories.map((category) => (
      <div key={category.id}>
        <p>{category.title}</p>
        <button className="btn__del" type="button" onClick={() => removeCategories(category.id)}>
          удалить
        </button>
      </div>
    ))}
  </div>
);
}

export default MainPage;
