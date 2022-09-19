import Link from "next/link";
import {
  Nav,
  NavItem,
  MobileIcon,
  NavMenu,
  NavIcon,
  NavLogo,
} from "./Navbar.elements";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    // Client-side-only code
    window.addEventListener("resize", showButton);
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavLogo>
            <Link href="/" onClick={closeMobileMenu}>
              <NavIcon />
            </Link>
            GMendonça
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <Link href="/">
              <a>
                <NavItem>Home</NavItem>
              </a>
            </Link>

            <Link href="/experience">
              <a>
                <NavItem>Experience</NavItem>
              </a>
            </Link>

            <Link href="/contact">
              <a>
                <NavItem>Contact</NavItem>
              </a>
            </Link>

            <Link href="/resume">
              <a>
                <NavItem>Resume</NavItem>
              </a>
            </Link>
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
