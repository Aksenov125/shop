
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store/store"
import CategoriesItem from "./CategoryItem"
import { categoriesThunk, removeCategory } from "../Main/mainPageSlice";

function CategoriesList(): JSX.Element{
    const categories = useSelector((store:RootState) => store.categories.categories)
    const dispatch = useAppDispatch();
    const removePreferencess = async (id: number) => {
        await dispatch(removeCategory(id)).catch(console.log);
        dispatch(categoriesThunk()).catch(console.log);
      };
    return (
        <div>
            {categories.map((category) => (
                <div>
                <CategoriesItem  key={category.id}  category={category}/>
                <button
                className="btn__del"
                type="button"
                onClick={() => removePreferencess(category.id)}
              >
                удалить
              </button>
              </div>
            ))}
        </div>
    )

}


export default CategoriesList