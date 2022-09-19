import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 85vw;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  margin-left: 7vw;
  margin-top: 70px;
  margin-bottom: 50px;
  border-radius: 50px;

  @media screen and (max-width: 1000px) {
    height: 230px;
  }
  @media screen and (max-width: 426px) {
    height: 260px;
  }
`;

export const ImageFooter = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 160px;
  left: 48%;

  @media screen and (max-width: 1000px) {
    bottom: 190px;
  }
  @media screen and (max-width: 800px) {
    left: 44%;
  }
  @media screen and (max-width: 550px) {
    left: 41%;
  }
  @media screen and (max-width: 426px) {
    bottom: 220px;
  }
  @media screen and (max-width: 390px) {
    left: 37%;
  }
`;

export const TextFooter = styled.p`
  color: #fff;
  margin-top: 70px;
  font-weight: bold;
  font-size: 18px;

  @media screen and (max-width: 426px) {
    font-size: 12px;
  }
`;

export const BtnFooter = styled.button`
  align-self: center;
  border-radius: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 250px;
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: ease-out 0.2s;

  @media screen and (max-width: 321px) {
    font-size: 12px;
  }

  &:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(71, 70, 70, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
    border: 2px solid #57bdd1;
  }
`;
