import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bem-vindo a Gataria!',
    Svg: require('@site/static/img/homepagefeatures/welcome.svg').default,
    description: (
      <>
        A nossa jornada começa no primeiro dia de trabalho como o primeiro DevOps para uma nova rede social.
        Assim precisaremos construir tudo do zero!
        Uma grande desafio! Porém também uma excelente oportunidade de aprendizado não é?
      </>
    ),
  },
  {
    title: 'Hands on do comeco ao fim',
    Svg: require('@site/static/img/homepagefeatures/devcode.svg').default,
    description: (
      <>
        Aprenda fazendo! Colocaremos a mão a massa do inicio ao fim do curso e em praticamente todas as aulas. Há bastante trabalho a ser feito e muitas
        ferramentas a serem implementadas, para concluirmos com sucesso a nossa missão
      </>
    ),
  },
  {
    title: 'Containers e Kubernetes',
    Svg: require('@site/static/img/homepagefeatures/containers.svg').default,
    description: (
      <>
        Implantaremos tudo com containers! A construção das nossas imagens será feita com Docker. Utilizaremos o Kubernetes
        pare manter nossos ambientes operando, escalar nossa aplicações quando necessário e dividir os ambientes de produção e desenvolvimento
      </>
    ),
  },
  {
    title: 'Infraestrutra orientada ao Git',
    Svg: require('@site/static/img/homepagefeatures/gitflow.svg').default,
    description: (
      <>
        O GitHub será o nosso versionador de código. Implantaremos uma estratégia de Git Flow real. 
        E a nossa infraestrutura irá caminhar junto com o git utilizando o Github Actions
      </>
    ),
  },
  {
    title: 'Automatizando tudo com pipelines CI/CD',
    Svg: require('@site/static/img/homepagefeatures/cicd.svg').default,
    description: (
      <>
        Do Build ao Deploy, criaremos do zero as Pipelines CI/CD. 
        Todos os passos serão feitos de maneira automatizada pelo Github Actions, e os runners serão executados dentro do nosso cluster pois serão
        do tipo Self-hosted
      </>
    ),
  },
  {
    title: 'Monitoramento e Observabilidade',
    Svg: require('@site/static/img/homepagefeatures/monitoring.svg').default,
    description: (
      <>
        Acompanhe tudo em um ambiente de monitoramento e observabilidade em tempo real com Grafana, Prometheus, Loki e que incluí até mesmo um APM
         (Application Performance Monitoring) o SigNoz
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
