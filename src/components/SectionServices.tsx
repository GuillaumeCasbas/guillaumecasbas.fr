import React, { useId } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import {services as content } from '../content';

const SectionServices = () => (
  <section className={clsx('container', 'padding-vert--lg', 'padding-vert--md')}>
    <Heading
      as="h2"
      className={clsx('text--center', 'text--secondary')}
    >
      {content.title}
    </Heading>
    <div className="row">
      {content.list.map(service => (
        <div className="col col--6 padding-vert--sm" key={useId()}>
          <div className={clsx('card')}>
            <div className="card__header">
              <h3>{service.title}</h3>
            </div>
            <div className="card__body">
              <p>{service.desc}</p>
              <p className='text--italic'>{service.tools}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionServices;
