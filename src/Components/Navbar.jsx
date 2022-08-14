import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar_block"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        className="navbar_logo"
        alt=""
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="navbar_avatar"
        alt=""
      />
    </div>
  );
};

export default Navbar;
