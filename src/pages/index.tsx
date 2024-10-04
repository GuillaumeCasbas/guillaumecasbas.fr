import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Freelance web developer`}
      description="Full stack web developer: react, react-native, symfony, laravel, golang, …">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.section}>
          <div className="container text--center">
            <div className="row">
              <div className='col'>
                <Heading as="h3">The project is in the final stages of completion. Be prepared.</Heading>
              </div>
            </div>
            <div className="row">
              <div className='col'>More cool stuff will come !</div>
            </div>
          </div>
        </section>
        <section className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/about/">
              About me
          </Link>
        </section>
      </main>
    </Layout>
  );
}
