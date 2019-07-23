import React from 'react';
import Helmet from 'react-helmet';

import Claim from './Homepage/Claim';
import Footer from './Homepage/Footer';
import Groups from './Homepage/Groups';
import Header from './Homepage/Header';
import Info from './Homepage/Info';
import Members from './Homepage/Members';

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
        >
          <link rel="stylesheet" href="https://use.typekit.net/gzt3ugr.css" />
        </Helmet>
        <Header />
        <Claim />
        <Groups />
        <Info />
        <Members />
        <Footer />
      </>
    );
  }
}

export default IndexPage;
