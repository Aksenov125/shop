import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import CategoriesItem from "./CategoryItem";
import ItemPage from "./ItemPage";
import { Item, ItemCategory } from "../Main/type";

function CategoryPage ():JSX.Element{
    const {categoryTitle} = useParams()

    const categories = useSelector((store:RootState) => store.categories.categories)
console.log(categories, '122211');
    const currentCategory:ItemCategory = categoryTitle ? categories.find((category) => category.title === categoryTitle): undefined


    return (
        <div>
            <div>
                {categories.map((category) => (
                    <CategoriesItem key={category.id} category={category}/>
                ))}
            </div>
            
            <div>
                {currentCategory?.Items.map((item:Item) => <ItemPage key={item.id} item={item}/> )}
            </div>

        </div>
    )
}

export default CategoryPage