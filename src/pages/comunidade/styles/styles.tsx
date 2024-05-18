import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import clsx from "clsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  textAlign: "center",
  backgroundColor: "#000000",
  color: "#ffffff",
}));

export const CarouselImage = styled("img")(({ theme }) => ({
  width: "70%",
  height: "auto",
  borderRadius: "10px",
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
  backgroundColor: "transparent",
  fontWeight: "bold",
  width: "auto",
  padding: "0.5rem 2rem",
  height: "3rem",
  border: "none",
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

type ArrayImages = {
  image: string;
  description: string;
};

type CarouselProps = {
  title: string;
  description: string;
  images: Array<ArrayImages>;
};

type AccordionProps = {
  title: string;
  description: string;
  image: string;
};

export const Carousel = ({ title, description, images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <CarouselContainer>
      <CarouselButton
        onClick={() => {
          setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }}
      >
        <ArrowBackIosIcon />
      </CarouselButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          width: "50%",
          textAlign: "center",
        }}
      >
        <CarouselImage src={images[currentIndex].image} />
        <CarouselTitle>{images[currentIndex].description}</CarouselTitle>
        <CarouselDescription>
          {images[currentIndex].description}
        </CarouselDescription>
      </div>
      <CarouselButton
        onClick={() => {
          setCurrentIndex((currentIndex + 1) % images.length);
        }}
      >
        <ArrowForwardIosIcon />
      </CarouselButton>
    </CarouselContainer>
  );
};

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "10px",
  width: "100%",
}));

export const MyAccordion = (accData: AccordionProps) => {
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
      <AccordionDetails
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          padding: "5%",
          color: "#ffffff",
        }}
      >
        <p>{accData.description}</p>
        <img src={accData.image} />
      </AccordionDetails>
    </StyledAccordion>
  );
};

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
          gap: "40px",
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
          <strong>A maior Comunidade de devops de Goiás. </strong>
          Comunidade RawDevops
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "normal",
            }}
          >
            Raw devopss
          </h3>
        </h1>
      </div>
    </header>
  );
};

const ImagesContent = () => {
  return (
    <Carousel
      title="carrossel"
      description="carrossel"
      images={[
        {
          image:
            "https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png",
          description: "Meetup",
        },
        {
          image:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--N5bgW7pB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/elinssndmuzcyc2sct4t.png",
          description: "Devopsss",
        },
      ]}
    />
  );
};

const dropdowndata = [
  {
    title: "1 Meetup",
    description:
      "Moris ipsum dolor sit amet, consectetur adipiscing elit. MOrbi nec odio. Nullam sit amet magna in magna gravida vehicula. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
    image:
      "https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png",
  },
  {
    title: "2 Meetup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. Morbi nec odio. Nullam sit amet magna in magna gravida vehicula. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
    image:
      "https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png",
  },
  {
    title: "3 Meetup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec odio. Nullam sit amet magna in magna gravida vehicula. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunceget bibendum sodales, augue velit cursus nunc,",
    image:
      "https://www.lumis.com.br/data/files/90/36/4F/EF/3BF0861095E4E08628AAF9C2/111214-personas-marketing_facebook.png",
  },
];

type FaqProps = {
  title: string;
  description: string;
};

const EventsPage = ({ list }: { list: FaqProps[] }) => {
  const WrapperSpan = styled("div")({
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    padding: "0.5rem 1rem",
    maxHeight: "2rem",
    borderRadius: ".25rem",
    border: "1px solid #FF5E3A",
  });

  const SpanFaq = styled("span")({
    color: "transparent",
    fontSize: ".75rem",
    fontWeight: "500",
    lineHeight: "1rem",
    backgroundClip: "text",
    backgroundImage: "linear-gradient(90deg, #FF5E3A 0%, #FF5E3A 100%)",
    "@media (min-width: 1024px)": {
      fontSize: ".875rem",
      lineHeight: "1.25rem",
    },
  });

  const Header = styled("header")({
    padding: "5rem 0",
    display: "flex",
    flexDirection: "row",
    gap: "2.5rem",
    height: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
    },
  });
  return (
    <Header className={clsx("hero hero--primary", "hero-banner")}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100%",
          alignItems: "flex-start",
          justifySelf: "flex-start",
        }}
      >
        <WrapperSpan>
          <SpanFaq>Eventos_</SpanFaq>
        </WrapperSpan>
        <h1>Eventos da comunidade 😄</h1>
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
        {list.map((item) => MyAccordion(item))}
      </div>
    </Header>
  );
};

const MakeYourEvent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        padding: "5%",
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <h2>Quer fazer seu evento?</h2>
      <p>
        Entre em contato conosco para que possamos te ajudar a organizar seu
        evento.
      </p>
      <MyButton
        onClick={() => {
          //Link para o forms aqui
        }}
      >
        Entre em contato
      </MyButton>
    </div>
  );
};

export default function CommunityPage(): JSX.Element {
  return (
    <main>
      <CommunityHeader />
      <ImagesContent />
      {/* <DropdownEvents /> */}
      <EventsPage list={dropdowndata} />
      <MakeYourEvent />
    </main>
  );
}
