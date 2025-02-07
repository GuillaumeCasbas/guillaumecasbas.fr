import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import { contact as content } from '../content';

const SectionContact = () => (
  <section className={clsx('padding-vert--lg')} id="contact">
    <div className={clsx('container', 'py-3', 'text--center')}>
        <Heading as="h2" className={clsx('margin-vert--md', 'text--secondary')}>
          {content.title}
        </Heading>
        <a
          className={clsx('button', 'button--primary')}
          type="button"
          href="https://www.linkedin.com/in/guillaumecasbas/"
          target='_blank'
        >
          {content.contact}
        </a>
    </div>
  </section>
);

export default SectionContact;
