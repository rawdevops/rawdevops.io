import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - End-to-end DevOps`}
      description="Modern infrastructure trainings and consulting"
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            marginLeft: "5rem",
            alignSelf: "flex-start",
            fontSize: "3rem",
          }}
        >
          RAW DevOps
        </h1>
        <center>
          <img src="/img/RAW-DevOps-Logo-650x400.png" alt="RAW DevOps Logo" />
        </center>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            padding: "2rem 5rem",
          }}
        >
          <p>
            A <strong>RAW DevOps</strong> é uma empresa especializada em
            treinamentos em Infraestrutura Moderna de TI, com uma
            abordagem diferenciada que se baseia em três ideais centrais:
          </p>
          <ul>
            <li>
              <strong>Home Office:</strong> Nosso modelo de trabalho é inspirado
              por empresas pioneiras como GitLab, que adotou o trabalho remoto
              desde o início, em 2011, e hoje é uma empresa de código aberto com
              capital aberto na bolsa de valores dos Estados Unidos. Além disso,
              buscamos referência na Cannonical, que oferece oportunidades
              remotas para seus colaboradores desde 2004. Acreditamos no
              potencial do home office para proporcionar flexibilidade e
              produtividade à equipe.
            </li>
            <li>
              <strong>Open Source:</strong> Valorizamos a filosofia do software
              de código aberto e estamos comprometidos com o uso de Softwares
              Open Source em todos os nossos projetos. Acreditamos que essa
              abordagem não apenas proporciona alta qualidade, mas também cria
              uma comunidade colaborativa em torno das tecnologias utilizadas,
              beneficiando a todos os envolvidos.
            </li>
            <li>
              <strong>Infraestrutura Moderna:</strong> Defendemos a construção
              de uma infraestrutura moderna, ágil e escalável. Para isso,
              adotamos tecnologias de nuvem como Google Cloud e AWS, que
              permitem a implantação rápida e elástica de recursos de
              computação, armazenamento e rede conforme a demanda. Essa
              abordagem possibilita que nossa equipe de DevOps se adapte
              rapidamente às necessidades do negócio, escale recursos de acordo
              com o crescimento da demanda e promova a entrega contínua de
              software com maior confiabilidade. Além disso, a infraestrutura
              moderna contribui para um ambiente de trabalho menos estressante
              para os profissionais de TI, ao otimizar processos e garantir
              maior eficiência. Nosso compromisso com esses ideais nos permite
              oferecer soluções inovadoras e de alta qualidade aos nossos
              clientes, auxiliando-os a alcançar seus objetivos de forma
              eficiente e sustentável no ambiente de TI moderno.
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
