import React from 'react';

import {hero as content } from '../content';
import HeroImage from '../../static/img/hero_design.svg';
import clsx from 'clsx';

const SectionHero = () => (
  <div className="container" id="hero">
    <div className="row">
      <div className={clsx('col', 'col--6', 'text-wrapper')}>
        <div className="hero-greetings">{content.greetings}</div>
        <div className="hero-heading">{content.title}</div>
        <div className="margin-top--md">{content.description}</div>
      </div>
      <div className={clsx('col', 'col--6', 'image-wrapper')}>
        <HeroImage />
      </div>
    </div>
  </div>
);

export default SectionHero;
