import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { Customers } from "../components/Customers";
import { TweetsSection } from "./bootcamp";
import { ButtonProps, styled } from "@mui/material";
import FaqPAGE from "./signoz/styles/styles";
import { Button } from "@mui/material";
import { Courses } from "../components/Courses";

function HomepageHeader() {
  const ResponsiveDiv = styled("div")({
    display: "grid",
    gridTemplateColumns: "700px 1fr",
    "@media (max-width: 1024px)": {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  });

  const TitleText = styled("h1")({
    fontSize: "3rem",
    fontWeight: "normal",
  });

  const SubText = styled("h3")({
    fontSize: "1.5rem",
    margin: "0",
  });

  const MyImg = styled("img")({
    maxWidth: "600px",
    objectFit: "cover",
    "@media (max-width: 768px)": {
      maxWidth: "350px",
    },
  });

  const ButtonHome = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#ff5e3a",
    marginTop: "1rem",
    backgroundColor: "#000000",
    fontWeight: "semibold",
    width: "60%",
    paddingBottom: "0.5rem",
    borderRadius: "12px",
    height: "3rem",
    border: "1px solid #797979",
    textShadow: "0 0 20px #ff5e3a, 0 0 30px #ff5e3a, 0 0 40px #ff5e3a",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#797979",
      cursor: "pointer",
    },
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
      width: "80%",
      alignSelf: "center",
    },
  }));
  return (
    <header
      style={{
        padding: "5rem, 20%",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={clsx("hero hero--primary")}
    >
      <ResponsiveDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            padding: "0 2rem",
          }}
        >
          <TitleText>
            Consultoria e treinamentos em{" "}
            <strong>Infraestrutura Moderna de TI</strong>
          </TitleText>
          <SubText>
            Cloud, containers, observabilidade completa poderosa e serverless.
          </SubText>
          <a
            href="#courses"
            rel="noopener noreferrer"
            style={{
              color: "#ff5e3a",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <ButtonHome>
              <SubText>comece já!</SubText>
            </ButtonHome>
          </a>
        </div>
        <MyImg src="img/HomePageImg.png" alt="home" />
      </ResponsiveDiv>
    </header>
  );
}

const faq = [
  {
    title: "Este curso serve também para desenvolvedores?",
    description:
      "Sim, o curso pode ser feito por devs interessados no assunto, que desejam por exemplo não ficar perdido em reuniões sobre assunto e ter o entendimento do que um DevOps faz. O curso pode ser feito também para devs que desejam migrar para DevOps. Ou até mesmo incrementar o currículo aprendendo DevOps",
  },
  {
    title:
      "Haverá um certificado de conclusão para adicionar o mesmo no Linkedin?",
    description:
      "Sim, após a conclusão do curso na plataforma da Udemy você poderá gerar um certificado de conclusão",
  },
  {
    title: "Pode fazer este curso sem nenhum conhecimento em DevOps?",
    description:
      "Sim, inclusive recomendo este curso pois com ele estará mais proximo a realidade cobrada pelo mercado.",
  },
  {
    title: "Quais as opções de pagamento do curso?",
    description:
      "O pagamento do curso é gerenciado pela Udemy. Assim a plataforma aceita, pix, cartão de credito, boleto entre outros.",
  },
  {
    title: "Há possibilidade de reeembolso caso eu não goste do conteúdo?",
    description: "Sim, seguindo as regras e políticas da Udemy.",
  },
];

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <Courses />
      <Customers />
      <TweetsSection />
      <main>
        <FaqPAGE list={faq} />
      </main>
    </Layout>
  );
}
