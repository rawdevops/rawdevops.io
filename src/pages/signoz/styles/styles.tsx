import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import clsx from "clsx";

export const ResponsiveDiv = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  padding: "0 20%",
  width: "70%",
  "@media (max-width: 768px)": {
    padding: "10px",
    flexDirection: "column",
    gap: "10px",
  },
}));

export const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "rgb(255, 94, 58)",
  fontWeight: "bold",
  width: "auto",
  padding: "0.5rem 2rem",
  height: "3rem",
  border: "none",
  boxShadow: "0 0 5px #ff5e3a, 0 0 10px #ff5e3a, 0 0 15px #ff5e3a",
  "&:hover": {
    backgroundColor: "rgb(253, 111, 79)",
    theme,
  },
  "@media (max-width: 768px)": {
    height: "3rem",
    fontSize: "0.9rem", 
    padding: "0.5rem 1rem", 
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "10px",
}));

const MyAccordion = (title: string, description: string) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            style={{
              color: "#ffffff",
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div
          style={{
            marginRight: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/img/iconAcc.png"
            alt="icon"
            style={{ width: "40px", height: "40px", maxWidth: "none" }}
          />
        </div>
        <h3
          style={{
            marginTop: "10px",
            color: "#ffffff",
            fontWeight: "500",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            margin: "0",
          }}
        >
          {title}
        </h3>
      </AccordionSummary>
      <AccordionDetails>
        <p
          style={{
            padding: "0 2rem",
          }}
        >
          {description}
        </p>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export const VideoContainer = ({ id }) => {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            <Translate> </Translate>
          </Heading>
          <div
            className="video-container"
            style={{
              boxShadow: "0 0 5px #ff5e3a, 0 0 10px #ff5e3a, 0 0 15px #ff5e3a",
              borderRadius: "12px",
            }}
          >
            <LiteYouTubeEmbed
              id={id}
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="RAW DevOps Bootcamp"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type FaqProps = {
  title: string;
  description: string;
};

const FaqPAGE = ({ list }: { list: FaqProps[] }) => {
  return (
    <header
      style={{
        padding: "5rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
        height: "auto",
        justifyContent: "center",
      }}
      className={clsx("hero hero--primary", "hero-banner")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100%",
          alignItems: "flex-start",
        }}
      >
        <span>FAQ</span>
        <h1>Perguntas Frequentes</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          maxWidth: "43.625rem",
        }}
      >
        {list && list.map((item) => MyAccordion(item.title, item.description))}
        {/* {list &&
          list.map((item, index) =>
            MyAccordion key={index} title={item.title} description={item.description} />
          )} */}
      </div>
    </header>
  );
};

export default FaqPAGE;
