import Link from "next/link";
import { FooterContainer, ImageFooter, TextFooter, BtnFooter } from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ImageFooter src="/MyPic.png" />
        <TextFooter>Não tenha vergonha, me mande uma mensagem para conversarmos sobre seu projeto.</TextFooter>

        <Link href="/contact">
            <a>
              <BtnFooter>Entre em contato</BtnFooter>
            </a>
          </Link>
      </FooterContainer>
    </>
  );
};

export default Footer;
