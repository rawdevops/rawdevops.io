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
          }}
        >
          Rastreamentos, métricas e logs do OpenTelemetry-Native em um único
          painel
        </h1>
        <h3
          style={{
            fontSize: "1.5rem",
          }}
        >
          Uma única ferramenta para todas as suas necessidades de
          observabilidade: APM, logs, métricas, exceções, alertas e painéis
          alimentados por um poderoso construtor de consultas.
        </h3>
      </div>
      <ResponsiveDiv>
        <MyButton>Comece Já!</MyButton>
        <MyButton>Documentação</MyButton>
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
