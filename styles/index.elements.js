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
`;

export const BtnSectionOne = styled.button`
  margin-top: 20px;
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
`;

export const SectionTwo = styled.section`
  max-width: 100vw;
`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin-top: 50px;
  font-size: 36px;
`;

export const DivTechs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerTech = styled.div`
  margin: 10px;
  width: 25vw;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 50px;
`;

export const TitleTechs = styled.h2`
  color: #fff;
`;

export const Techs = styled.span`
  color: #fff;
  font-size: 18px;
`;
