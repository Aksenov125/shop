import React from "react";

import * as api from '../Main/type'
import { NavLink } from "react-router-dom";



function CategoriesItem({category}: {category:api.Category}): JSX.Element {

    const className = `item_${category.id}`

    return(
        <div>
<NavLink to={`/categories/${category.title}`} className={className}>
<h1>{category.title}</h1>
</NavLink>

</div>

    )
    
} 

export default CategoriesItem