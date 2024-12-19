import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import {services as content } from '../content';

const SectionServices = () => (
  <section className={clsx('container', 'py-3', 'padding-vert--lg')}>
    <Heading as="h2">{content.title}</Heading>
    <div className="row">
      <div className="col col--6">
        <div className="card">
          <div className="card__header">
            <h3>{content.web.title}</h3>
          </div>
          <div className="card__body">
            <p>{content.web.p1}</p>
            <p>{content.web.p2}</p>
          </div>
        </div>
      </div>
      <div className="col col--6">
        <div className="card">
          <div className="card__header">
            <h3>{content.coaching.title}</h3>
          </div>
          <div className="card__body">
            <p>{content.coaching.p1}</p>
            <p>{content.coaching.p2}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionServices;
