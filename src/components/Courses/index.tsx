import styled from "@emotion/styled";
import React from "react";
import Card from "../Card";

import BootcampBg from "../../../static/img/BootcampBg.png";
import SignozBg from "../../../static/img/SignozBg.png";
import BootcampAvatar from "../../../static/img/BootcampAvatar.png";
import SignozAvatar from "../../../static/img/SignozAvatar.png";


export const Courses = () => {
    const ResponsiveDiv = styled("div")({
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
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
          padding: "50px 20%"
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
            available
            title="RAW DevOps Bootcamp completo e 100% Open Source"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image={BootcampBg}
            href={"/bootcamp"}
            docHref="/docs/Bootcamp/welcome"
            avatar={BootcampAvatar}
          />
          <Card
            title="SigNoz - plataforma all-in-one de observabilidade open source"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image={SignozBg}
            href={"/signoz"}
            avatar={SignozAvatar}
          />
        </ResponsiveDiv>
      </div>
    );
  };