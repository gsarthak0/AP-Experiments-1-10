import React, { useState } from "react";

const Navbar = ({ currUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <a
        href="/login"
        className="text-white hover:text-green-200 transition duration-300 no-underline"
      >
        Log In
      </a>
      <a
        href="/signup"
        className="text-white hover:text-green-200 transition duration-300 no-underline ml-4"
      >
        Sign Up
      </a>
    </>
  );
};

export default Navbar;
