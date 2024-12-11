import { Item } from "../Main/type"


function ItemPage ({item}: {item:Item}): JSX.Element{
    return (
<div> {item.title}</div>
    )
}


export default ItemPage