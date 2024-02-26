import React from "react";
import { Avatar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "24rem",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
  border: "none",
  "&:hover": {
    //Scale the card on hover
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
}));

const TextDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingBottom: "1rem",
  minHeight: "10rem",
});

const MyImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px 12px 0 0",
});

const Title = styled("h3")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.5rem",
  fontWeight: "bold",
}));

const Desc = styled("p")(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "1rem",
  fontWeight: "normal",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
}));

const MyAvatar = styled(Avatar)({
  height: "4rem",
  width: "4rem",
  borderRadius: "0.375rem",
  marginTop: "-2rem",
  alignSelf: "flex-start",
  marginLeft: "2.5rem",
  marginBottom: "1rem",
});

const ButtonDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  gap: "1rem",
  padding: "1rem",
  width: "100%",
});

const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#000000"),
  backgroundColor: "#2c2c2c",
  fontWeight: "bold",
  minWidth: "10rem",
  height: "2.5rem",
  "&:hover": {
    backgroundColor: "#797979",
  },
}));

interface CardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  available?: boolean;
  docHref?: string;
}

const Card = ({
  title,
  image,
  href,
  description,
  available,
  docHref,
}: CardProps) => {
  return (
    <Wrapper
      onClick={() => {
        window.location.href = href;
      }}
    >
      <MyImg src={image} alt={title} />
      <MyAvatar alt={title} src={image} />
      <TextDiv>
        <Title>{title}</Title>
        <Desc>{available ? description : "Em breve"}</Desc>
      </TextDiv>
      <ButtonDiv>
        {available ? (
          <MyButton href={href}>20% OFF</MyButton>
        ) : (
          <MyButton disabled>Em breve...</MyButton>
        )}
        <MyButton href={docHref}>Documentação</MyButton>
      </ButtonDiv>
    </Wrapper>
  );
};

export default Card;
