import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Menu from "../Models/Menu.jsx";

const MenuPage = () => {
    return (
        <div>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

export default MenuPage;