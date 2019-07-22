import React from 'react';
import Helmet from 'react-helmet';
import FinalWaySection from '../partials/FinalWaySection';
import FooterSection from '../partials/FooterSection';
import HeaderSection from '../partials/HeaderSection';
import NonProfitsSection from '../partials/NonProfitsSection';
import OneMillionSection from '../partials/OneMillionSection';
import PartnersSection from '../partials/PartnersSection';
import TimelineSection from '../partials/TimelineSection';
import { t } from '../translations';

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Helmet
          title={t('meta_title')}
          meta={[
            {
              property: 'og:image',
              content: 'http://ngo.blueberry.io/og-ngo.png',
            },
            {
              name: 'description',
              content: t('meta_desct'),
            },
            {
              property: 'og:title',
              content: t('meta_title'),
            },
            {
              property: 'og:description',
              content: t('meta_desct'),
            },
          ]}
        />
        <HeaderSection />
        <NonProfitsSection />
        <OneMillionSection />
        <FinalWaySection />
        <TimelineSection />
        <PartnersSection />
        <FooterSection />
      </>
    );
  }
}

export default IndexPage;
