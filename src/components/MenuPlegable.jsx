import React from "react";
import { useState } from "react";

const MenuPlegable = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navBar">
      <div className="profile">
        <p>Isaac M.</p>
        <box-icon name="badge-check" type="solid" color="#00faff"></box-icon>
      </div>
      <ul className="menu">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#aboutMe">Sobre Mi</a>
        </li>
        <li>
          <a href="#proyects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      
      <button className="dropdown-button" onClick={toggleMenu}>
        <box-icon name="menu" color="#fffffe" />
      </button>
      {isMenuOpen && (
        <ul className="dropdown-list">
          <li>
            <a href="#home" onClick={closeMenu}>Inicio</a>
          </li>
          <li>
            <a href="#aboutMe" onClick={closeMenu}>Sobre Mi</a>
          </li>
          <li>
            <a href="#proyects" onClick={closeMenu}>Proyectos</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contacto</a>
          </li>
        </ul>
      )}
      </div>
    
  );
};

export default MenuPlegable;
