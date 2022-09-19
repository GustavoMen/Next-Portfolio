import Head from "next/head";
import Link from "next/link";

import { SectionOne, ContainerText,  FristText, MainText, SecundaryText, AboutText, BtnSectionOne, DivBtns, SectionTwo, Title, DivTechs, ContainerTech, TitleTechs, Techs} from '../styles/index.elements'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mendonça - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionOne>
        <ContainerText>
          <FristText>Ola mundo, meu nome é</FristText>
          <MainText>Gustavo Mendonça</MainText>
          <SecundaryText>Desenvolvedor Full Stack</SecundaryText>
          <AboutText>Desenvolvedor Full Stack, com experiência de atuação como Desenvolvedor Freelancer para pequenos projetos do mercado.</AboutText>
          <DivBtns>
            <Link href="/contact">
              <a>
                <BtnSectionOne>Entre em contato</BtnSectionOne>
              </a>
            </Link>

            <Link href="/experience">
              <a>
                <BtnSectionOne>Ver projetos</BtnSectionOne>
              </a>
            </Link>
          </DivBtns>
        </ContainerText>
      </SectionOne>

      <SectionTwo>
        <Title>Habilidades</Title>
        <DivTechs>
          <ContainerTech>
            <TitleTechs>Front End</TitleTechs>
            <Techs>Javascript, Typescript, React, Redux, Context API, Styled-Components</Techs>
          </ContainerTech>
          <ContainerTech><TitleTechs>Back End</TitleTechs>
            <Techs>Node, Express, MongoDB, PostfreSQL, TypeORM, Sequelize</Techs></ContainerTech>
          <ContainerTech><TitleTechs>Geral</TitleTechs>
            <Techs>Typescript, Docker, Git, Github, Jest</Techs></ContainerTech>
        </DivTechs>
      </SectionTwo>
      
    </>
  );
}