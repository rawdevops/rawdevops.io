import styled from "@emotion/styled";
import React from "react";
import Card from "../Card";

export const Courses = () => {
  const ResponsiveDiv = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    alignContent: "start",
    gap: "20px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  });
  return (
    <div
      id="courses"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#000000",
        padding: "50px 20%",
      }}
    >
      <h1
        style={{
          color: "#fff",
          marginBottom: "50px",
          alignSelf: "flex-start",
        }}
      >
        • Nossos Cursos
      </h1>
      <ResponsiveDiv>
        <Card
          title="SigNoz - Plataforma All-in-one de Observabilidade Open Source"
          description="Todas as suas necessidades de observabilidade em uma única ferramenta. APM, logs, métricas, exceções, alertas e dashboards.  \
          Signoz é a primeira plataforma all-in-one de observabilidade open source. \
          A alternativa ao NewRelic e Datadog, que a comunidade sempre desejou. \
          "
          image="/img/SignozBg.png"
          href={"/signoz"}
          avatar="/img/SignozAvatar.png"
        />
        <Card
          available
          title="RAW DevOps Bootcamp completo e 100% Open Source"
          description=" A nossa jornada começa no primeiro dia de trabalho como o primeiro DevOps para uma nova rede social de nome Gataria. Teremos que construir TUDO do zero. Um grande desafio! Somos um bootcamp em DevOps completo e vamos implantar um ciclo DevOps começo ao fim do absoluto zero"
          image="/img/BootcampBg.png"
          href={"/bootcamp"}
          docHref="/docs/Bootcamp/welcome"
          avatar="/img/BootcampAvatar.png"
        />
      </ResponsiveDiv>
    </div>
  );
};
