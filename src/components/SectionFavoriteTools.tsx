import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import {tools as content } from '../content';

const SectionFavoriteTools = () => (
  <section className={clsx('container', 'py-3')}>
    <Heading as="h2" className='text--primary'>{content.title}</Heading>
  </section>
);

export default SectionFavoriteTools;
