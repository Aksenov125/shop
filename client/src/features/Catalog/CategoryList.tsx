
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store/store"
import CategoriesItem from "./CategoryItem"
import { categoriesThunk, removeCategory } from "../Main/mainPageSlice";
import ModalWindow from "../Main/components/ModalWindow";
import { useState } from "react";


function CategoriesList(): JSX.Element{
    const categories = useSelector((store:RootState) => store.categories.categories)
    const dispatch = useAppDispatch();
    const toggleModal = () => setIsModalOpen(prev => !prev);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const removeCategories = async (id: number) => {
        await dispatch(removeCategory(id)).catch(console.log);
        dispatch(categoriesThunk()).catch(console.log);
      };
    return (
        <div>
              <button onClick={toggleModal}>Открыть модальное окно</button>
              <ModalWindow isOpen={isModalOpen} onClose={setIsModalOpen} />
            {categories.map((category) => (
                <div>
                <CategoriesItem  key={category.id}  category={category}/>
                <button
                className="btn__del"
                type="button"
                onClick={() => removeCategories(category.id)}
              >
                удалить
              </button>
              </div>
            ))}
        </div>
    )

}


export default CategoriesList