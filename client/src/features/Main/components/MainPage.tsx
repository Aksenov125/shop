import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';

import { RootState } from '../../../store/store';
import { categoriesThunk, removeCategory } from '../mainPageSlice';


function MainPage(): JSX.Element {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(categoriesThunk()).catch(console.log);
    }, [dispatch]);
    const removePreferencess = async (id: number) => {
        await dispatch(removeCategory(id)).catch(console.log);
        dispatch(categoriesThunk()).catch(console.log);
      };
    
    
    const categories = useSelector((store: RootState) => store.categories.categories);
    
    console.log(categories);
    
    return (
        <div>
            {categories.map((category) => (
                <div key={category.id}>
                    <p>{category.title}</p>
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
    );
}

export default MainPage;