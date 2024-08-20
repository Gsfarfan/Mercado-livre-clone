import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css';
import CartButton from "../CartButton/CartButton";

function Header() {
  return(
   <header className="header">
   <div> 

   <SearchBar/>
   <CartButton/>
   </div>
   </header>
  );

}

export default Header;