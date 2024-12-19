import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import {pros as content } from '../content';

const SectionPros = () => (
  <section className={clsx('background--secondary', 'padding-vert--lg', 'text-on-primary')} id="pros">
    <div className={clsx('container', 'py-3')}>
      <Heading as="h2">{content.title}</Heading>
      <div className="row">
      <div className={clsx('col', 'col--6')}>
        <div>&bull; 10 ans d'expériences</div>
        <div>&bull; Accompagnement personnalisé pour vos équipes</div>
      </div>
      <div className={clsx('col', 'col--6')}>
        <div>&bull; Expertise en React, React Native et Symfony.</div>
        <div>&bull; TDD, tests automatisés</div>
      </div>
    </div>
    </div>
  </section>
);

export default SectionPros;
