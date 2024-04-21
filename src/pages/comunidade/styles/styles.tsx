import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import clsx from "clsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  backgroundColor: "rgb(88, 88, 88)",
  fontWeight: "bold",
  width: "auto",
  padding: "0.5rem 2rem",
  height: "3rem",
  border: "none",
  boxShadow: "0 0 5px #838383, 0 0 10px #838383, 0 0 15px #686767",
  "&:hover": {
    backgroundColor: "rgb(54, 54, 54)",
    theme,
  },
  "@media (max-width: 768px)": {
    height: "3rem",
    fontSize: "0.9rem",
    padding: "0.5rem 1rem",
  },
}));

export const CarouselContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  textAlign: "center",
  padding: "10% 20%",
}));

export const CarouselImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

export const CarouselTitle = styled("h3")(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "normal",
}));

export const CarouselDescription = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "normal",
}));

export const CarouselButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "rgb(88, 88, 88)",
  fontWeight: "bold",
  width: "auto",
  padding: "0.5rem 2rem",
  height: "3rem",
  border: "none",
  boxShadow: "0 0 5px #838383, 0 0 10px #838383, 0 0 15px #686767",
  "&:hover": {
    backgroundColor: "rgb(54, 54, 54)",
    theme,
  },
  "@media (max-width: 768px)": {
    height: "3rem",
    fontSize: "0.9rem",
    padding: "0.5rem 1rem",
  },
}));

type CarouselProps = {
  title: string;
  description: string;
  image: string;
};

export const Carousel = ({ title, description, image }: CarouselProps) => {
  return (
    <CarouselContainer>
      <CarouselImage src={image} />
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselDescription>{description}</CarouselDescription>
      <CarouselButton>Saiba mais</CarouselButton>
    </CarouselContainer>
  );
};

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#414141",
  color: "#ffffff",
  borderRadius: "10px",
}));

export const MyAccordion = (accData: object) => {
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
          }}
        >
          {accData.title}
        </h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>{accData.description}</p>
        <img src={accData.image} />
      </AccordionDetails>
    </StyledAccordion>
  );
};
