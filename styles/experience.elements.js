import styled from "styled-components";

export const SectionOne = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  grid-area: title;
  text-align: center;
  color: #fff;
`;

export const ContainerProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivProject = styled.div`
  width: 45vw;

  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  border: 2px solid transparent;
  transition: border 0.2s;

  &:hover {
    border-color: #57bdd1;
  }

  @media screen and (max-width: 960px) {
    width: 80vw;
    margin-top: 40px;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 18px;
  color: #fff;
`;

export const ProjectDate = styled.span`
  font-weight: bold;
  color: #fff;
`;

export const ProjectAbout = styled.p`
  color: #fff;
`;

export const DivAbout = styled.div`
  height: 160px;

  @media screen and (max-width: 700px) {
    height: 200px;
  }
  @media screen and (max-width: 560px) {
    height: 240px;
  }
  @media screen and (max-width: 450px) {
    height: 280px;
  }
  @media screen and (max-width: 370px) {
    height: 310px;
  }
`;

export const DivCategories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 230px;

  @media screen and (max-width: 700px) {
    height: 270px;
  }
  @media screen and (max-width: 580px) {
    height: 310px;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    height: 400px;
  }
  @media screen and (max-width: 370px) {
    height: 450px;
  }
`;

export const Category = styled.div`
  width: 49%;

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const SubTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const CategoryList = styled.ul``;

export const ListItem = styled.li`
  color: #fff;
  padding: 4px;
`;

export const DivOneBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivTwoBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const BtnProjectOne = styled.button`
  align-self: center;
  border-radius: 50px;
  margin-bottom: 16px;
  margin-top: 16px;
  width: 250px;
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: ease-out 0.2s;

  @media screen and (max-width: 960px) {
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

export const BtnProjectTwo = styled.button`
  align-self: center;
  border-radius: 50px;
  margin-bottom: 16px;
  margin-top: 16px;
  width: 250px;
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: ease-out 0.2s;

  @media screen and (max-width: 960px) {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(71, 70, 70, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
    border: 2px solid #57bdd1;
    width: 100%;
  }

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

export const LinkPage = styled.a`
  align-self: center;
`;
