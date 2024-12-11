import { useEffect } from 'react';
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
}

export default MainPage;