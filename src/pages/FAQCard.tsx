import React from "react";
import Card from "../components/FAQ/Card";

const Cards = [
  {
    title: "O que é DevOps?",
    content:
      "DevOps é uma cultura que tem como objetivo principal a colaboração e comunicação entre desenvolvedores e profissionais de infraestrutura. O principal objetivo é a entrega de software de forma mais rápida e eficiente.",
  },
  {
    title: "Quais são as principais ferramentas de DevOps?",
    content:
      "As principais ferramentas de DevOps são: Jenkins, Git, Docker, Kubernetes, Puppet, Chef, Ansible, Terraform, entre outras.",
  },
  {
    title: "Quais são as vantagens de adotar a cultura DevOps?",
    content:
      "As principais vantagens de adotar a cultura DevOps são: entrega de software mais rápida e eficiente, redução de custos, aumento da qualidade do software, maior colaboração entre equipes, entre outras.",
  },
  {
    title: "Quais são as principais práticas de DevOps?",
    content:
      "As principais práticas de DevOps são: integração contínua, entrega contínua, monitoramento, automação, entre outras.",
  },
];

const FAQBody = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      className="container"
    >
      <div>
        {Cards.map((card, index) => {
          return <Card key={index} title={card.title} body={card.content} />;
        })}
      </div>
    </div>
  );
};

export default FAQBody;
