import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Quotes from '@site/src/components/Quotes';
import Image from '@theme/IdealImage';
import Translate, { translate } from '@docusaurus/Translate';
import LogoSlider from '@site/src/components/LogoSlider';
import FAQ from '@site/src/components/FAQ';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Heading from '@theme/Heading';
import { Customers } from "@site/src/components/Customers";
import CountdownTimer from "@site/src/components/CountdownTimer"; 

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <a href=""> <img src="img/RAW-DevOps-Logo.png" align="right" alt="docusaurus mascot" height="400" width="650" /> </a> <br></br><br></br>
        <h1 className="hero__title"><img src="img/Bootcamp.png" align="center" alt="docusaurus mascot" height="125" width="175" /></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.udemy.com/course/raw-devops-bootcamp/?couponCode=RAWDEVOPSJAN">
            COMPRE NOSSO CURSO COM 20% OFF
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Bootcamp/modulo1">
            Documentação Bootcamp
          </Link>
        </div>
      </div>
    </header>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            <Translate> </Translate>
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="nye4IonaWpM"
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
}

function MigrationAnnouncement() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div
        className={clsx(styles.announcement, styles.announcementDark)}
        data-theme="dark">
        <div className={styles.announcementInner}>
          <Translate
            values={{
              docusaurusV1Link: (
                <Link to="https://www.udemy.com/course/raw-devops-bootcamp/?couponCode=RAWDEVOPSJAN">
                  <Translate>ciclo DevOps começo ao fim do absoluto zero!</Translate>
                </Link>
              ),
              migrationGuideLink: (
                <Link to="https://www.udemy.com/course/raw-devops-bootcamp/?couponCode=RAWDEVOPSJAN">
                  <Translate>uma implantação real</Translate>
                </Link>
              ),
            }}>
            {`O nosso diferencial é implantar um {docusaurusV1Link} Este roadmap foi cuidadosamente pensado para te preparar para o mercado com {migrationGuideLink}.`}
          </Translate>
        </div>
      </div>
    </header>
  );
}

function MigrationAnnouncement2() {
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div
        className={clsx(styles.announcement2, styles.announcementLight)}
        data-theme="light">
        <div className={styles.announcementInner}>
          <Translate
            values={{
            }}>
            {`FAQ`}
          </Translate>
        </div>
      </div>
    </header>
  );
}

function QuotesSection() {
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <div className="row">
          {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  img={quote.thumbnail}
                  style={{ overflow: 'hidden' }}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tweet({ handle, name, content, avatar }) {
  return (
    <div className={clsx('card', styles.tweet)} style={{ marginTop: '2rem' }}>
      <div className="card__header">
        <div className="avatar">
          <a href="https://www.udemy.com/course/raw-devops-bootcamp/#reviews" className="avatar__link">
            <img alt={name} className="avatar__photo" src={avatar} />
          </a>
          <div className="avatar__intro">
            <div className={styles.tweet}>
              <strong>{name}</strong>{' '}
              <br></br>
              <span className={styles.tweetMeta}>
                {handle}
              </span>
            </div>
            <div>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


function TweetsSection() {
  return (
    <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
      <div className="container">
        <h2
          className={clsx(
            'margin-btm--lg',
            'text--center',
            styles.sectionTitle,
          )}
          style={{ color: 'white' }}>
          Avaliações dos Alunos
        </h2>
        <div className={clsx('row', styles.tweetsSection)}>
          <div className="col col--4">
            <Tweet
              handle="⭐⭐⭐⭐⭐"
              name="Magdiel Augusto"
              avatar="/img/tweets/udemy-logo.png"
              content={
                <>
                  O curso está incrivel! A didática do Paulo Santiago é muito boa, o passo a passo dos procedimentos que precisam ser realizados é bem intuitiva, explicação simples e clara. Vale muito a pena, nunca tinha feito um curso tão completo como esse, sem duvidas o mais completo da Udemy!
                </>
              }
            />
            <Tweet
              handle="⭐⭐⭐⭐⭐"
              name="Everson B."
              avatar="/img/tweets/udemy-logo.png"
              content={
                <>
                  Curso 1000 estrelas!!! Só agradecer ao professor pelas técnicas repassadas com precisão!!! Valeu mesmo!!!! Só aguardando os próximos bootcamps. =D
                </>
              }
            />
          </div>
          <div className="col col--4">
            <Tweet
              handle="⭐⭐⭐⭐⭐"
              name="Allan Cordeiro"
              avatar="/img/tweets/udemy-logo.png"
              content={
                <>
                  Curso fera demais galera, vale a pena o investimento, é bem fora do padrão e bem prático.
                </>
              }
            />
            <Tweet
              handle="⭐⭐⭐⭐⭐"
              name="Italo Rafael"
              avatar="/img/tweets/udemy-logo.png"
              content={
                <>
                  Curso bastante intenso, com um excelente conteúdo. Parabéns pela didática. Cumpre o que promete. Aguardando os próximos cursos.
                </>
              }
            />
          </div>
          <div className="col col--4">
            <Tweet
              handle="⭐⭐⭐⭐⭐"
              name="Joao Pedro S."
              avatar="/img/tweets/udemy-logo.png"
              content={
                <>
                  Excelente didática e conteúdo abrangente! Este curso é uma verdadeira joia para quem busca aprofundar seus conhecimentos em DevOps. Além de oferecer um aprendizado sólido, tive a oportunidade de esclarecer dúvidas que já me intrigavam antes mesmo de iniciar o curso. A abordagem é simples, direta e eficaz, deixando nada a desejar. Cada tópico é minuciosamente explorado, desde os fundamentos até os aspectos mais avançados, garantindo que os alunos estejam preparados para os desafios reais do campo DevOps.
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CountdownTimer2() {
  return (
    <div>
      <CountdownTimer targetDate="2024-04-07" />
    </div>
  );
} 

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - End-to-end DevOps`}
      description="Modern infrastructure trainings and consulting">
      <HomepageHeader />
      <LogoSlider />
      <CountdownTimer2 />
      <Customers />
      <main>
        <VideoContainer />
        <HomepageFeatures />
        <TweetsSection />
        <MigrationAnnouncement2 />
        <FAQ />
        <MigrationAnnouncement />
        <QuotesSection />
      </main>
    </Layout>
  );
}