import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { Tab, Tabs, Typography, Box, Grid, styled } from '@mui/material';
import styles from './styles.module.css';


function CaseStudies(): JSX.Element {
  return (
    <Layout title="DevOps Consulting">
      <section>
        <div className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>

          <h2 style={{ textAlign: "center" }} > Consultoria DevOps </h2>
          <div style={{ textAlign: "center" }}>
            <p style={{ display: "inline-block", fontSize: "16px", maxWidth: "65%", textAlign: "center" }}>
            Desenvolva tecnologia melhor, mais rápido e barato.
            </p>
          </div>
          <h3 style={{ textAlign: "center" }} > Como nós ajudamos o seu negócio </h3>
          <div style={{ textAlign: "center" }}>
            <p style={{ display: "inline-block", fontSize: "16px", maxWidth: "70%", textAlign: "center" }}>
              Implantamos a Infraestrutura necessária para que as suas aplicações possuam alta disponibilidade, escala por demanda e deploys sem downtime.  
              Entregamos uma alta automação para que os desenvolvedores possam focar 100% no desenvolvimento da sua solução.
              Obtenha uma Observabilidade completa para não apenas acompanhar os ambientes como também ser capaz de melhorar a performance do seu software. 
              Utilizando as ferramentas DevOps mais modernas você irá acelerar ao máximo o ciclo de desenvolvimento.
            </p>
          </div>

          <div>
            <TabsComponent />
          </div>

          <h2 style={{ textAlign: "center" }} > Confira nossos Cases de Sucesso </h2>


          <div className={"row"}>
            <div className={"col col--6 margin-vert--md"}>
              <div className="card">
                <div className="card__header">
                  <h3> Integras Fácil </h3>
                </div>
                <div className="card__image">
                  <img
                    src="/img/consulting/integrasfacil.png"
                    alt="IntegrasFacil"
                  />
                </div>
                <div className="card__body">
                  <p>

                  </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary"
                    to={"/consulting/integrasfacil/"}
                  >
                    Leia mais
                  </Link>
                </div>

              </div>
            </div>
            <div className={"col col--6 margin-vert--md"}>
              <div className="card">
                <div className="card__header">
                  <h3>Datasolid Tech Solutions</h3>

                </div>
                <div className="card__image">
                  <img
                    src="/img/consulting/datasolid.png"
                    alt="Datasolid Tech Solutions"
                  />
                </div>
                <div className="card__body">
                  <p>
                  </p>
                </div>
                <div className="card__footer">
                  <a className="button button--primary"
                    href="/consulting/datasolid/"
                  >Leia mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


const CustomTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    borderBottom: '1px solid #ccc',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'black',

  },
  '& .Mui-selected': {
    fontWeight: 'bold',
    color: 'black',
    background: 'rgba(169, 169, 169, 0.5)',
    borderRadius: '5px',
    // background: ' linear-gradient(19deg, #b5b5b5 0%, #a6a6a6 100%)',
  },
}));

const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <CustomTabs value={selectedTab} onChange={handleChange} variant="fullWidth">
        <Tab label="Kubernetes e Serverless" style={{ color: 'black' }} />
        <Tab label="Cloud" style={{ color: 'black' }} />
        <Tab label="Observabilidade" style={{ color: 'black', textSizeAdjust: 'auto' }} />
        <Tab label="Nosso Diferencial" style={{ color: 'black' }} />
      </CustomTabs>

      <TabPanel value={selectedTab} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img src="/img/consulting/consulting1.png" className={`${styles.image} ${styles.imageBig}`} alt="Imagem de consultoria" />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={styles.containerAlign}>
              <Typography variant="h6"> <b> Infraestrutura do tamanho do seu negócio </b> </Typography>
              <Typography variant="body1">
                O teu software estará em containers! Sejam implantados diretamente no Kubernetes ou em serverless, o objetivo é o mesmo: escalabilidade, robustez e economia de recursos.
                E integrado a outras ferramentas que compõem o ecossistema de desenvolvimento, como na construção, nos testes e deploy.
                Você terá automação total do seu ambiente, seja nos ambientes de desenvolvimento ou produção. 
              </Typography>
              <br></br>
              <div className={styles.contentAlign}>
                <a href="https://api.whatsapp.com/send?phone=62982654177" className={`${styles.firstButton} ${styles.btn} ${styles.btnPrimary} ${styles.hasIcon}`}>
                  <span>Fale com um consultor</span>
                  <img className={`${styles.secondButton} ${styles.navbarWhatsappLink} ${styles.hasIcon}`} />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
      <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img src="/img/consulting/consulting2.png" className={`${styles.image} ${styles.imageBig}`} alt="Imagem de consultoria" />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={styles.containerAlign}>
              <Typography variant="h6"> <b> O provedor que se encaixa melhor no seu negócio </b> </Typography>
              <Typography variant="body1">
                Com projetos entregues em diferentes provedores, acreditamos que o melhor é que se encaixa
                no financeiro do negócio. Nosso apoio vai desde a analise do negócio até arquitetura do software e suas necessidades
                para a escolha do provedor.
              </Typography>
              <br></br>
              <div className={styles.contentAlign}>
                <a href="https://api.whatsapp.com/send?phone=62982654177" className={`${styles.firstButton} ${styles.btn} ${styles.btnPrimary} ${styles.hasIcon}`}>
                  <span>Fale com um consultor</span>
                  <img className={`${styles.secondButton} ${styles.navbarWhatsappLink} ${styles.hasIcon}`} />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>



      <TabPanel value={selectedTab} index={2} >
      <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img src="/img/consulting/consulting3.png" className={`${styles.image} ${styles.imageBig}`} alt="Imagem de consultoria" />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={styles.containerAlign}>
              <Typography variant="h6"> <b> Monitoramento moderno e completo </b> </Typography>
              <Typography variant="body1">
                Somos pioneiros na implementação do SigNoz, a primeira plataforma All-in-one de Observabilidade Open Source. 
                Acompanhe o uso, escala e necessidades do seu ambiente, 
                tenha os seus Logs prontos para consulta e acompanhe a performance do seu código. Monitore as conexões com parceiros.
                E os alertas no seu canal favorito. Nossos projetos vão além do SigNoz caso necessário. Porem com o SigNoz
                possuímos um monitoramento do seu ambiente com o mesmo nível do NewRelic e Datadog. 
              </Typography>
              <br></br>
              <div className={styles.contentAlign}>
                <a href="https://api.whatsapp.com/send?phone=62982654177" className={`${styles.firstButton} ${styles.btn} ${styles.btnPrimary} ${styles.hasIcon}`}>
                  <span>Fale com um consultor</span>
                  <img className={`${styles.secondButton} ${styles.navbarWhatsappLink} ${styles.hasIcon}`} />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={selectedTab} index={3}>
      <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img src="/img/consulting/consulting4.png" className={`${styles.image} ${styles.imageBig}`} alt="Imagem de consultoria" />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={styles.containerAlign}>
              <Typography variant="h6"> <b> Entusiastas em Infraestrutura Moderna Open Source </b> </Typography>
              <Typography variant="body1">
                Entregamos Projetos 100% Open Source. Acreditamos que essa abordagem não apenas proporciona alta qualidade, mas também cria uma comunidade colaborativa em torno das tecnologias utilizadas, beneficiando a todos os envolvidos.
              </Typography>
              <br></br>
              <div className={styles.contentAlign}>
                <a href="https://api.whatsapp.com/send?phone=62982654177" className={`${styles.firstButton} ${styles.btn} ${styles.btnPrimary} ${styles.hasIcon}`}>
                  <span>Fale com um consultor</span>
                  <img className={`${styles.secondButton} ${styles.navbarWhatsappLink} ${styles.hasIcon}`} />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
};

const TabPanel: React.FC<{ children?: React.ReactNode; value: number; index: number }> = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);


export default CaseStudies;
