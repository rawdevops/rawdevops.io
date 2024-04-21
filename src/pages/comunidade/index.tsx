import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import {
  Carousel,
  MyAccordion,
  MyButton,
  ResponsiveDiv,
} from "./styles/styles";

export default function Community(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const CommunityHeader = () => {
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
            Comunidade RawDevops <p></p>{" "}
            <strong>A maior comunidade de devops de Goiás.</strong>
          </h1>
        </div>
        <ResponsiveDiv>
          <MyButton>Entre na comunidade</MyButton>
        </ResponsiveDiv>
      </header>
    );
  };

  const ImagesContent = () => {
    return (
      <Carousel
        title="carrossel"
        description="carrossel"
        image="https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png"
      />
    );
  };

  const dropdowndata = [
    {
      title: "1 Meetup",
      description: "Meetup",
      image:
        "https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png",
    },
    {
      title: "2 Meetup",
      description: "Meetup",
      image:
        "https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png",
    },
    {
      title: "3 Meetup",
      description: "Meetup",
      image:
        "https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png",
    },
  ];

  const DropdownEvents = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#000000",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          padding: "5%",
          color: "#ffffff",
        }}
      >
        <h1> Eventos da comunidade </h1>
        {dropdowndata && dropdowndata.map((item) => MyAccordion(item))}
      </div>
    );
  };

  return (
    <Layout
      title={`${siteConfig.title} - Comunidade`}
      description="Comunidade do SigNoz"
    >
      <main>
        <CommunityHeader />
        <ImagesContent />
        <DropdownEvents />
      </main>
    </Layout>
  );
}
