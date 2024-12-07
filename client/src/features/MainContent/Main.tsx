

import { Outlet } from "react-router-dom";
import Footer from "./Footer";




function Main(): JSX.Element{
    return(
     
            
        <div>
            <Outlet/>
            <div>
                <Footer/>
            </div>
        </div>
        
    )
}


export default Main