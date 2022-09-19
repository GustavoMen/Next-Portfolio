import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  height: 80px;
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Logo = styled.h1`
  color: red;
`;

export const NavItem = styled.span`
  margin-left: 32px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.6s ease;

  &:hover {
    color: #57bdd1;
  }
`;

export const ItemName = styled.a`
  text-decoration: none;
`;
