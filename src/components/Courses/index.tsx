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
          title="SigNoz - plataforma all-in-one de observabilidade open source"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/img/SignozBg.png"
          href={"/signoz"}
          avatar="/img/SignozAvatar.png"
        />
        <Card
          available
          title="RAW DevOps Bootcamp completo e 100% Open Source"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/img/BootcampBg.png"
          href={"/bootcamp"}
          docHref="/docs/Bootcamp/welcome"
          avatar="/img/BootcampAvatar.png"
        />
      </ResponsiveDiv>
    </div>
  );
};
