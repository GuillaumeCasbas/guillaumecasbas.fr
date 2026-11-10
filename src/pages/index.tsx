import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import SectionHero from '../components/SectionHero';
import SectionServices from '../components/SectionServices';
import SectionContact from '../components/SectionContact';
import SectionFavoriteTools from '../components/SectionFavoriteTools';
import MovemberBanner from '../components/MovemberBanner';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main>
        <MovemberBanner />
        <SectionHero />
        <SectionServices />
        <SectionFavoriteTools />
        <SectionContact />
      </main>
    </Layout>
  );
}
