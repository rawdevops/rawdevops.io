import React from "react";
import Card from "./Card";

const FAQBody = () => (
  <>
    <Card
      body="Sim, o curso pode ser feito por devs interessados no assunto, que desejam por exemplo não ficar perdido em reuniões sobre assunto e ter o entendimento do que um DevOps faz. 
      O curso pode ser feito também para devs que desejam migrar para DevOps. Ou até mesmo incrementar o currículo aprendendo DevOps"
      title="Este curso serve também para desenvolvedores?"
    />
    <Card
      body="Sim, após a conclusão do curso na plataforma da Udemy você poderá gerar um certificado de conclusão"
      title="Haverá um certificado de conclusão para adicionar o mesmo no Linkedin?"
    />
    <Card
      body="Sim, inclusive recomendo este curso pois com ele estará mais proximo a realidade cobrada pelo mercado."
      title="Pode fazer este curso sem nenhum conhecimento em DevOps?"
    />
    <Card
      body="O pagamento do curso é gerenciado pela Udemy. Assim a plataforma aceita, pix, cartão de credito, boleto entre outros."
      title="Qual as opções de pagamento do curso?"
    />
    <Card
      body="Sim, seguindo as regras e políticas da Udemy."
      title="Há possibilidade de reeembolso caso eu não goste do conteúdo?"
    />
  </>
);

export default FAQBody;