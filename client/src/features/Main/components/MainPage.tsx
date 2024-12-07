import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store"
import { useEffect } from "react";




function MainPage(): JSX.Element{
    const categories = useSelector((store: RootState) => store.categories);
    console.log(categories);
    
    return(
        <div>
          {/* {
            categories.map((category)=>{
            <div key={category.id}>
             <p>{category.title}</p>
            </div>
            })
          }   */}
        </div>
    )
}


export default MainPage