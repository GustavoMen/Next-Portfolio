import Link from "next/link";
import {
  Nav,
  NavItem,
  MobileIcon,
  NavMenu,
  NavIcon,
  NavLogo,
  NavItemContainer,
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
            <NavItemContainer>
              <Link href="/">
                <a>
                  <NavItem>Home</NavItem>
                </a>
              </Link>
            </NavItemContainer>

            <NavItemContainer>
              <Link href="/experience">
                <a>
                  <NavItem>Experience</NavItem>
                </a>
              </Link>
            </NavItemContainer>
            <NavItemContainer>
              <Link href="/contact">
                <a>
                  <NavItem>Contact</NavItem>
                </a>
              </Link>
            </NavItemContainer>
            <NavItemContainer>
              <a
                href="https://drive.google.com/file/d/1SMiwxmLHsv2Nc7Qs9G0R71lH7niB0BFL/view"
                target="_blank"
                rel="noreferrer"
              >
                <NavItem>Resume</NavItem>
              </a>
            </NavItemContainer>
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
