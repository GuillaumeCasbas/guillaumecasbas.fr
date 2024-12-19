import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import SectionHero from '../components/SectionHero';
import SectionPros from '../components/SectionPros';
import SectionServices from '../components/SectionServices';
import SectionContact from '../components/SectionContact';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main>
        <SectionHero />
        <SectionPros />
        <SectionServices />
        <SectionContact />
      </main>
    </Layout>
  );
}
