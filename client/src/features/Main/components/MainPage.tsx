import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';

import { RootState } from '../../../store/store';
import { categoriesThunk } from '../mainPageSlice';

function MainPage(): JSX.Element {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(categoriesThunk()).catch(console.log);
    }, [dispatch]);
    
    const categories = useSelector((store: RootState) => store.categories.categories);
    
    console.log(categories);
    
    return (
        <div>
            {categories.map((category) => (
                <div key={category.id}>
                    <p>{category.title}</p>
                </div>
            ))}
        </div>
    );
}

export default MainPage;