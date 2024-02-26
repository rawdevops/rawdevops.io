import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
// import LogoSlider from "@site/src/components/LogoSlider";
import CountdownTimer from "../components/CountdownTimer";
import { Customers } from "../components/Customers";
import FAQBody from "./FAQCard";
//@ts-ignore
import bootCampImage from "../../static/img/Bootcamp.png";
//@ts-ignore
import sigNozGif from "../../static/img/countdown/signoz.gif";
import Card from "../components/Card";
import { TweetsSection } from "./bootcamp";
import { styled } from "@mui/material";
import { FaqPAGE } from "./signoz/styles/styles";

function CountdownTimer2() {
  return (
    <div>
      <CountdownTimer targetDate="2024-04-07" />
    </div>
  );
}

const Courses = () => {
  const ResponsiveDiv = styled("div") ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#000000",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <h1
        style={{
          color: "#fff",
          marginBottom: "50px",
        }}
      >
        Nossos Cursos
      </h1>
      <ResponsiveDiv>
        <Card
          available
          title="DevOps Bootcamp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={bootCampImage}
          href={"/bootcamp"}
          docHref="/docs/Bootcamp/welcome"
        />
        <Card
          title="SigNoz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={sigNozGif}
          href={"/signoz"}
        />
      </ResponsiveDiv>
    </div>
  );
};

function HomepageHeader() {
  const TitleText = styled("h1")({
    fontSize: "3rem",
  });

  const SubText = styled("h3")({
    fontSize: "1.5rem",
    margin: "0",
  });

  const ButtonHome = styled("button")({
    color: "#ff5e3a",
    backgroundColor: "#000000",
    fontWeight: "semibold",
    width: "30%",
    paddingBottom: "0.5rem",
    borderRadius: "12px",
    height: "3.5rem",
    border: "1px solid #797979",
    textShadow: "0 0 20px #ff5e3a, 0 0 30px #ff5e3a, 0 0 40px #ff5e3a",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#797979",
    },
    "@media (max-width: 768px)": {
      fontSize: "0.9rem", // Adjust font size for smaller screens
      width: "100%",
    },
  });
  return (
    <header
      style={{
        padding: "32px",
        backgroundColor: "#000000",
      }}
      className={clsx("hero hero--primary")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <TitleText>
        Treinamentos e consultoria em Infraestrutura Moderna de TI
        </TitleText>
        <SubText>
          Cloud, containers, observabilidade completa poderosa e serverless.
        </SubText>
        <ButtonHome>
          <SubText>Comece Já!!</SubText>
        </ButtonHome>
      </div>
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
      <CountdownTimer2 />
      <Courses />
      <Customers />
      <TweetsSection />
      <main>
        <FaqPAGE list={faq} />
      </main>
    </Layout>
  );
}
