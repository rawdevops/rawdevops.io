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
      flexDirection: "column",
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
    maxWidth: "700px",
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
      width: "100%",
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
              <SubText>EXPLORAR CONTEÚDO</SubText>
            </ButtonHome>
          </a>
        </div>
        <MyImg src="/img/HomePageImg.png" alt="home" />
      </ResponsiveDiv>
    </header>
  );
}

const faq = [
  {
    title: "Qual o nosso diferencial?",
    description:
      "Somos especialistas e entusiastas em Infraestrutura Moderna Open Source. \
      Através de profissionais apaixonados e com uma identidade visual alternativa e mais forte, tornamos a nossa jornada de aprendizado em tecnologia mais leve. \
      Entregamos Projetos 100% Open Source. Acreditamos que essa abordagem não apenas proporciona alta qualidade, \
      mas também cria uma comunidade colaborativa em torno das tecnologias utilizadas, \
      beneficiando a todos os envolvidos.",
  },
  {
    title:
      "Qual a plataforma utilizada nos cursos?",
    description:
      "Utilizamos a Udemy, além de ser uma plataforma amada pelos Desenvolvedores. O pagamento do curso é gerenciado pela Udemy com várias formas de pagamento e seguimos suas regras e políticas de reembolso.",
  },
  {
    title: "Tem certificado de conclusão nos cursos?",
    description:
      "Sim, após a conclusão do curso é possível gerar um certificado na plataforma da Udemy",
  },
  {
    title: "Tenho interesse na consultoria, para implantar infraestrutura moderna na minha empresa, como proceder?",
    description:
      "Contate-nos através do Whatsapp, também possuímos uma página exclusiva da consultoria no link rawdevops.io/consulting",
  },
  {
    title: "Ainda tenho dúvidas...",
    description: "Enviar um email para rawdevops@gmail, ou falar com a gente pelo WhatsApp nos botões presente nesta página",
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
