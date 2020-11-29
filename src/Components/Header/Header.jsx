import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';



//creamos el header para todas las páginas
const Header = () => {
    return (
        <header className="header">
           
            
            <p className="headerTitle">Popular Movies Database</p>
            <div className="navigate">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/populares">Populares</NavLink>
              
            </div>
        </header>
    )

}

export default Header;