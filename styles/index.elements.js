import styled from "styled-components";

export const SectionOne = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const ContainerText = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

export const FristText = styled.span`
  color: #fff;
  font-size: 18px;
`;

export const MainText = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 72px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 750px) {
    font-size: 62px;
  }
  @media screen and (max-width: 650px) {
    font-size: 54px;
  }
  @media screen and (max-width: 530px) {
    font-size: 46px;
  }
  @media screen and (max-width: 479px) {
    font-size: 38px;
  }
`;

export const SecundaryText = styled.p`
  font-size: 32px;
  color: #57bdd1;
`;

export const AboutText = styled.span`
  font-size: 18px;
  color: #fff;
`;

export const DivBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BtnSectionOne = styled.button`
  margin-top: 32px;
  margin-right: 40px;
  height: 60px;
  width: 200px;
  border: 2px solid #57bdd1;
  border-radius: 5px;
  background: none;
  color: #57bdd1;
  transition: ease-out 0.5s;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #57bdd1;
    color: #fff;
  }

  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const SectionTwo = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin-top: 50px;
  font-size: 36px;
`;

export const DivTechs = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerTech = styled.div`
  margin: 16px;
  width: 25vw;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  padding-bottom: 30px;
  margin-bottom: 50px;
  border: 2px solid transparent;
  transition: border 0.2s;

  @media screen and (max-width: 1000px) {
    width: 80vw;
    margin: 0;
    margin-top: 16px;
  }

  &:hover {
    border-color: #57bdd1;
  }
`;

export const TitleTechs = styled.h2`
  color: #fff;
`;

export const Techs = styled.span`
  color: #fff;
  font-size: 18px;
`;
