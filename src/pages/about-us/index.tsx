import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Treinamentos em Infraestrutura Moderna`}
      description="Capacitação em infraestrutura moderna de TI."
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "60px 0",
          backgroundColor: "#000", // Fundo preto
          color: "#f5f5f5", // Cor do texto para contraste
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            color: "#fff", // Cor branca para o título
            marginBottom: "40px",
          }}
        >

        </h1>

        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <img
            src="/img/RAW-DevOps-Logo.png" // Nova imagem
            alt="RAW DevOps Logo"
            style={{ marginBottom: "30px", width: "60%" }}
          />

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#ddd", // Texto em um tom de cinza claro
              marginBottom: "50px",
              textAlign: "justify",
            }}
          >
            Na <strong>RAW DevOps</strong>, somos especialistas em{" "}
            <strong>treinamentos em Infraestrutura Moderna de TI</strong>. 
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              width: "100%",
              padding: "0 5rem",
              backgroundColor: "#1a1a1a", // Fundo cinza escuro para contraste
              color: "#eee", // Texto em cinza claro
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              paddingBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                color: "#fff",
                marginTop: "30px",
                marginBottom: "20px",
                alignSelf: "center",
              }}
            >
              Nossos Valores Centrais
            </h2>

            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  marginBottom: "10px",
                }}
              >
                <strong>Home Office</strong>
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#ddd",
                }}
              >
                A RAW DevOps acredita no potencial do trabalho remoto para
                aumentar a produtividade e a satisfação da equipe. Inspirados
                por empresas pioneiras, como GitLab e Canonical, que adotaram o
                home office desde os seus primórdios, incentivamos uma cultura de
                trabalho flexível e altamente eficiente.
              </p>
            </section>

            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  marginBottom: "10px",
                }}
              >
                <strong>Open Source</strong>
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#ddd",
                }}
              >
                Valorizamos a filosofia do software de código aberto e estamos 
                comprometidos com o uso de Softwares Open Source em todos os nossos 
                projetos. Acreditamos que essa abordagem não apenas proporciona alta 
                qualidade, mas também cria uma comunidade colaborativa em torno das 
                tecnologias utilizadas, beneficiando a todos os envolvidos.
              </p>
            </section>

            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  marginBottom: "10px",
                }}
              >
                <strong>Infraestrutura Moderna</strong>
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#ddd",
                }}
              >
                Nossa missão é implementar e ensinar as melhores práticas de
                infraestrutura moderna, utilizando Cloud Native. 
                Apoiamos nossos alunos a se prepararem para
                um mercado em constante transformação, com soluções que
                permitem a entrega contínua de software com agilidade, segurança
                e confiabilidade.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
