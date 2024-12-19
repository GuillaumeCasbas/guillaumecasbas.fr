import React from 'react';
import clsx from 'clsx';

import { contact as content } from '../content';

const SectionContact = () => (
  <section className={clsx('background--secondary', 'padding-vert--lg')} id="contact">
    <div className={clsx('container', 'py-3', 'text--center')}>
        <div className={clsx('text-on-primary', 'margin-bottom--md', 'heading')}>
          {content.title}
        </div>
        <a
          className={clsx('button', 'button--primary', 'button--lg')}
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
