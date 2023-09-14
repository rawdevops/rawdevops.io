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
    title: 'CODE',
    Svg: require('@site/static/img/homepagefeatures/code.svg').default,
    description: (
      <>
        Desembarcamos na Gataria como DevOps! É uma rede social exclusiva para gatos, e aqui estamos no nosso primeiro dia de trabalho.

Primeiro, navegaremos no site para entender o que os devs já construíram. A arquitetura baseada em microserviços nos chamou a atenção - uma escolha inteligente!

E finalmente é hora de colocar a mão na massa! Iniciaremos o código de todos os microserviços, tudo pela linha de comando. E vamos fazer tudo funcionar perfeitamente!

Escolhemos o GitHub para hospedarmos nosso código, a maior plataforma git do mundo. E você sabia que lá estão reunidos TODOS os projetos das ferramentas que usaremos neste curso? É incrível, né?

Código rodando e código no GitHUb. Agora é implementar nossas aplicações em containers Docker. Vamos tornar tudo ainda mais prático e ágil.
      </>
    ),
  },
  {
    title: 'BUILD',
    Svg: require('@site/static/img/homepagefeatures/build.svg').default,
    description: (
      <>
        Precisamos empacotar o nosso código em containers e utilizaremos o Docker para isso!

Vamos criar arquivos `Dockerfile` para cada um dos microserviços. E então `docker build` para gerar nas nossas imagens.

Images criadas, vamos rodar elas em conjunto e garantir que elas estejam se comunicando.

Maravilha! Conseguimos, agora vamos enviar nossas images pro docker hub e concluiremos mais um módulo!

Ah e com isso já estamos prontos para dar o próximo passo e colocar a Gataria no Kubernetes 🕸️!
      </>
    ),
  },
  {
    title: 'TESTE',
    Svg: require('@site/static/img/homepagefeatures/test.svg').default,
    description: (
      <>
        Automação é a palavra-chave para o sucesso do código da gataria!

Percebemos que os desenvolvedores já criaram alguns testes e estavam executando-os manualmente.

Queremos garantir a qualidade do nosso trabalho, por isso, estamos introduzindo testes automatizados em nossas pipelines CI/CD. Isso significa que toda vez que novos códigos forem adicionados às nossas branchs com CI/CD, os testes serão executados automaticamente, garantindo que tudo funcione perfeitamente!
      </>
    ),
  },
  {
    title: 'Release',
    Svg: require('@site/static/img/homepagefeatures/release.svg').default,
    description: (
      <>
        Chegou o momento especial em que nosso código está pronto para ir para produção! Finalmente, os esforços do desenvolvedor ganharão vida e estarão disponíveis para todos os nossos usuários.

E a nossa pipeline CI/CD precisa de um passo a mais quando vamos para produção! O Release!

Mas primeiro vamos definir uma estrategia de Git Flow real! Afinal a nossa infraestrutura vai caminhar junto com o git!

Agora, vamos entender o que é versionamento semântico! E a gente passa a ver o SemVer em todo lugar depois. E melhor vamos colocar para que as trocas das versões também sejam feitas de maneira automática!

Com essas duas estratégias sólidas definidas, estamos prestes a criar um Release incrível diretamente no Github! E o melhor de tudo: automatizado! 
      </>
    ),
  },
  {
    title: 'DEPLOY',
    Svg: require('@site/static/img/homepagefeatures/deploy.svg').default,
    description: (
      <>
É hora do deploy! Chegou o momento de trocar a imagem dos containers antigos pela nova, tanto no ambiente de desenvolvimento quanto na produção!

Nada de preocupações agora, pois com o Kubernetes, nosso deploy será feito sem Downtime, garantindo uma transição suave e fluida.

E a estrela do show é o Helm! Além de cuidar dos nossos deploys, o Helm também é um capaz de fazer rollbacks! Nessa área, já ouviu falar que mais importante que fazer deploys rápido, é fazer rollbacks rápidos? Caso algo de errado! E o Helm esta aqui para isto, deploys e rollbacks.

Também vamos criar Helm charts próprios para as apps da Gataria

Mas a melhor parte é que não faremos o deploy manualmente, teremos um processo totalmente automatizado! É aqui que entra o Github Actions, nossa plataforma de CI/CD. Durante o Bootcamp, construiremos nossas pipelines do zero!

Então, resumindo: o Helm será responsável pelos deploys e rollbacks, enquanto o Github Actions automatizará tudo o que for possível! 
      </>
    ),
  },
  {
    title: 'OPERATE',
    Svg: require('@site/static/img/homepagefeatures/operate.svg').default,
    description: (
      <>
       Vamos levar a Gataria para o mundo do Kubernetes! 

Com o poder do Kubernetes, iremos segmentar nossos ambientes em Dev e Prod usando namespaces. Os devs poderão visualizar as alterações no código no ambiente Dev, que será semelhante ao ambiente de Produção. Assim, ficarão mais tranquilos ao realizar o deploy na produção.

Além disso, vamos aprender a configurar o HPA (Horizontal Pod Autoscaler) para nossas aplicações em produção. Com essa configuração, nossa aplicação ganhará escalabilidade automática para lidar com um alto volume de acessos e desescalar quando a demanda diminuir. Dessa forma, a gataria usará somente os recursos necessários.

Iniciaremos criando nossos manifestos .yml manualmente no Kubernetes para um aprendizado mais sólido. Mas, logo em seguida, vamos adotar o Helm! Essa ferramenta tornará nossa vida muito mais fácil com o Kubernetes, facilitando o gerenciamento e a implantação de recursos.

Acreditamos que o conteúdo sobre Kubernetes que estamos abordando é excelente para o aprendizado. A partir do 3º módulo, será apenas Kubernetes
      </>
    ),
  },
  {
    title: 'MONITOR',
    Svg: require('@site/static/img/homepagefeatures/monitor.svg').default,
    description: (
      <>
        Monitoramento moderno é que propomos a ensinar vocês!

E para isto vamos seguir 2 conceitos:

4 Sinais de ouro da matéria do Google SRE (Site Reliability Engineering) e os 3 Pilares da Observabilidade.

Para alcançar nossos objetivos, precisaremos utilizar algumas ferramentas. Começaremos com a já consolidada stack de DevOps (Prometheus, Grafana e Loki), e em seguida, adotaremos Tracings. É aí que entra o Open Telemetry! Vamos aprender a instrumentar o código da nossa Gataria usando bibliotecas de Auto Instrumentação e para a parte visual, contaremos com o poderoso SigNoz.

O SigNoz é um APM (Application Performance Monitoring) e representa um conceito avançado em monitoramento! Mas não se preocupe, teremos uma aula sobre o que é um APM, para que todos fiquem por dentro.

Você sabia que o Open Telemetry é capaz de coletar Métricas, Tracings e Logs? Isso proporciona uma plataforma única e completa de monitoramento! Mas vamos deixar esse assunto para o curso, que será incrível! 
      </>
    ),
  },
  {
    title: 'PLAN',
    Svg: require('@site/static/img/homepagefeatures/plan.svg').default,
    description: (
      <>
       E chegamos na nossa última etapa: Plan.

Já falamos que quando o código chega a produção é um momento especial, né? E vocês conhecem o conceito do CHANGELOG? Precisamos saber o que foi implementado, saber rastrear qual código subiu exatamente na nova versão. E faremos isso com o RELEASE do GitHub. Definimos na nossa estratégia de Git Flow que a branch de produção só aceita código via Pull Request, e também há as issues, com as descrições do que os devs deveriam fazer.

Assim, nessa etapa, vamos automatizar esse rastreio! Após lançarmos o release, além da troca do número do nosso SemVer, será criado um release no GitHub com os Pull Requests e Tickets atrelados a ele que subiram nessa versão. 

E como todo time bom tem uma documentação técnica boa! Apresentamos o Docusaurus para ser a documentação da Gataria. E assim, esse carinha tem um lugar especial no nosso coração. 

Você sabia que o código da rawdevops.io é feito com Docusaurus? E melhor ainda, nosso código é aberto \o/ E caso queiram conferir, é só acessarem o projeto no GitHub: github.com/rawdevops/rawdevops.io 
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
      <div className="text--left padding-horiz--md">
        <h3 className="text--center">{title}</h3>
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
