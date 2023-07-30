/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  // {
  //   thumbnail: require('./Flag_Blank.svg'),
  //   name: '',
  //   title: translate({
  //     id: '',
  //     message: '',
  //     description: '',
  //   }),
  //   text: (
  //     <Translate
  //       id=""
  //       description="">
  //     </Translate>
  //   ),
  // },
  {
    thumbnail: require('./fotopessoal.jpg'),
    name: 'Paulo Henrique de Morais Santiago',
    title: translate({
      id: 'Instrutor.title',
      message: 'Instrutor',
      description: 'Title of quote of Instrutor on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
        Expert em DevOps e Cloud com mais de 8 anos de experiência. Atualmente trabalho como DevOps Engineer no Globoplay - Globo. 
        🇧🇷 Top 1 plataforma de streaming de video com mais de 30 milhões de usuários. Lidamos com milhões de requests por minuto todos os dias.
        Possuo experiencia de trabalho em ambientes escaláveis de alta disponibilidade 24/7/365 usando as melhores praticas DevOps e softwares open source.
        Sou certificado GCP: Professional Cloud DevOps Engineer.
      </Translate>
    ),
  },
  // {
  //   thumbnail: require('./Flag_Blank.svg'),
  //   name: '',
  //   title: translate({
  //     id: '',
  //     message: '',
  //     description: '',
  //   }),
  //   text: (
  //     <Translate
  //       id=""
  //       description="">
  //     </Translate>
  //   ),
  // },
];

export default QUOTES;