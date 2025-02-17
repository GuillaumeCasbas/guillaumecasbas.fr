import React, { useId } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import reactLogo from '../../static/img/tools/react.png';
import reactNativeLogo from '../../static/img/tools/react-native.png';
import symfonyLogo from '../../static/img/tools/symfony.png';
import graphqlyLogo from '../../static/img/tools/graphql.png';
import apolloLogo from '../../static/img/tools/apollo.png';
import typescriptLogo from '../../static/img/tools/typescript.png';
import golangLogo from '../../static/img/tools/golang.png';
import jestLogo from '../../static/img/tools/jest.png';
import storybookLogo from '../../static/img/tools/storybook.png';

const tools = [
  { url: reactLogo, alt: 'Reactjs logo' },
  { url: reactNativeLogo, alt: 'React native logo' },
  { url: symfonyLogo, alt: 'Symfony logo' },
  { url: graphqlyLogo, alt: 'Graphql logo' },
  { url: apolloLogo, alt: 'Apollo logo' },
  { url: typescriptLogo, alt: 'Typescript logo' },
  { url: golangLogo, alt: 'Go logo' },
  { url: jestLogo, alt: 'Jest logo' },
  { url: storybookLogo, alt: 'Storybook logo' },
];

const SectionFavoriteTools = () => (
  <section className={clsx('padding-vert--lg')} id="tools">
    <div className="container">
      <div className={clsx('background--secondary', 'card', 'padding-vert--md')}>
        <div className="card__body">
          <div className="tool-list">
            {tools.map(tool => (
              <img
                src={tool.url}
                alt={tool.alt}
                key={useId()}
                className="tool-logo"
                height={22}
                width="auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionFavoriteTools;
