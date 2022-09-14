import styled from "styled-components";
import Link from "next/link";

import { Nav, Title, NavItem, ItemName } from "./Navbar.elements";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <NavItem>Logo</NavItem>
        </Link>
      </div>
      <div>
        <Link href="/home">
          <a>
            <NavItem>Home</NavItem>
          </a>
        </Link>

        <Link href="/works">
          <a>
            <NavItem>Works</NavItem>
          </a>
        </Link>

        <Link href="/contact">
          <a>
            <NavItem>Contact</NavItem>
          </a>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
