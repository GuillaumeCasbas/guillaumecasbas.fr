import React, { useId } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import {hero as content } from '../content';
import profileUrl from '../../static/img/profile.png';
import Socials from './SocialsIcons';

const SectionHero = () => (
  <div className="container" id="hero">
    <div className={clsx('row', 'padding-vert--mg')}>
      <div className={clsx('col', 'col--4', 'image-wrapper', 'text--right', 'padding-top--lg')}>
        <img src={profileUrl} width={256} height={256} alt="Guillaume Casbas photo" />
      </div>
      <div className={clsx('col', 'col--8', 'text-wrapper')}>
        <div className={clsx('hero-greetings')}>{content.greetings}</div>
        <Heading as="h1" className={clsx('hero-heading text--secondary')}>{content.title}</Heading>
        <Heading as="h2" className={clsx('margin-vert--md')}>
          {content.description}
        </Heading>
        <ul className="margin-bottom--md margin-top--sm">
          {content.pros.map((pro) => (
            <li key={useId()}>{pro}</li>
          ))}
        </ul>
        <div className="hero-cta">
          <a
            className={clsx('button', 'button--primary', 'margin-bottom--md')}
            target='_blank'
            href='https://www.linkedin.com/in/guillaumecasbas'
          >
              {content.contact}
            </a>
            <Socials />
        </div>
      </div>
    </div>
  </div>
);

export default SectionHero;
