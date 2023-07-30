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

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <a href="google.com"> <img src="img/RAW-DevOps-Logo.png" align="right" alt="docusaurus mascot" height="400" width="650" /> </a> <br></br><br></br>
        <h1 className="hero__title"><img src="img/Bootcamp.png" align="center" alt="docusaurus mascot" height="125" width="175" /></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://forms.gle/KZDfBm3hQud4VYa69">
            Live de Lançamento dia 05/08/2023
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
                <Link to="https://forms.gle/KZDfBm3hQud4VYa69">
                  <Translate>ciclo DevOps começo ao fim do absoluto zero!</Translate>
                </Link>
              ),
              migrationGuideLink: (
                <Link to="https://forms.gle/KZDfBm3hQud4VYa69">
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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div
        className={clsx(styles.announcement2, styles.announcementDark)}
        data-theme="dark">
        <div className={styles.announcementInner}>
          <Translate
            values={{
            }}>
            {`Perguntas frequentes.`}
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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - End-to-end DevOps`}
      description="Learn building real things <head />">
      <HomepageHeader />
      <LogoSlider />
      <main>
        <VideoContainer />
        <HomepageFeatures />
        <MigrationAnnouncement />
        <QuotesSection />
        <MigrationAnnouncement2 />
        <FAQ />
      </main>
    </Layout>
  );
}
