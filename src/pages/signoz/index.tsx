import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { ResponsiveDiv, MyButton, VideoContainer } from "./styles/styles";
import FaqPAGE from "./styles/styles";
import CountdownTimer from "@site/src/components/CountdownTimer";

function CountdownTimer2() {
  return (
    <div>
      <CountdownTimer targetDate="2024-04-07" />
    </div>
  );
}

function handleButtonClick(href: string) {
  window.open(href);
}

function HomepageHeader() {
  return (
    <header
      style={{
        padding: "64px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "auto",
      }}
      className={clsx("hero hero--primary", "hero-banner")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          padding: "0 20%",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "normal",
          }}
        >
          Domine Observabilidade com o <p></p> <strong>primeiro curso de SigNoz do mundo</strong>
        </h1>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "normal",
          }}
        >
          SigNoz é a alternativa open source ao NewRelic e Datadog que sempre sonhamos
        </h3>
      </div>
      <ResponsiveDiv>
        {/* <MyButton>Comece Já!</MyButton>
        <MyButton>Documentação</MyButton> */}
        <MyButton
          onClick={() =>
            handleButtonClick("https://forms.gle/n8T6cmacLg1GW3UF9")
          }
        >
          FORM DE LANÇAMENTO
        </MyButton>
      </ResponsiveDiv>
      <VideoContainer id="XbGYQ3kYPjs" />
      <CountdownTimer2 />
    </header>
  );
}

const faq = [
  {
    title: "Qual plataforma o curso será disponibilizado?",
    description:
      "Udemy",
  },
  {
    title:
      "Haverá um certificado de conclusão para adicionar o mesmo no Linkedin?",
    description:
      "Sim, após a conclusão do curso na plataforma da Udemy você poderá gerar um certificado de conclusão",
  },
  {
    title: "Haverá desconto no lançamento?",
    description:
      "Sim, igualmente ao nosso Bootcamp vamos disponibilizar um cupom de 20%",
  },
  {
    title: "Quais as opções de pagamento do curso?",
    description:
      "O pagamento do curso é gerenciado pela Udemy. Assim a plataforma aceita, pix, cartão de credito, boleto entre outros. Além da possibilidade de parcelamento.",
  },
  {
    title: "Há possibilidade de reeembolso caso eu não goste do conteúdo?",
    description: "Sim, seguindo as regras e políticas da Udemy.",
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - SigNoz`}
      description="Modern infrastructure trainings and consulting"
    >
      <main>
        <HomepageHeader />
        <FaqPAGE list={faq} />
      </main>
    </Layout>
  );
}
