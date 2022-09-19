import Link from "next/link";
import { Nav, NavItem } from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <div>
          <Link href="/">
            <NavItem>Logo</NavItem>
          </Link>
        </div>
        <div>
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
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
