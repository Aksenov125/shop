import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";




function Main(): JSX.Element{
    return(
        <div>
            <NavBar/>
        <div>
            <Outlet/>
            <div>
                <Footer/>
            </div>
        </div>
        </div>
        
    )
}


export default Main