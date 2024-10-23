import React, { useState } from "react";  
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";  

const NavLinks = () => {
  return (
    <>
      <NavLink to="/registration">Registration</NavLink>  {/* Correct path */}
      <NavLink to="/records">Records</NavLink>
      <NavLink to="/announcements">Announcements</NavLink>
      <NavLink to="/appointment">Appointment</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-1/3 justify-end">
      <div className="hidden md:flex justify-between w-full">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
        {isOpen && (  
          <div className="flex flex-col items-center basis-full">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;