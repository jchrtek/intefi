import React from 'react';
import Helmet from 'react-helmet';

import Claim from './Homepage/Claim';
import Footer from './Homepage/Footer';
import Groups from './Homepage/Groups';
import Header from './Homepage/Header';
import Info from './Homepage/Info';
import Members from './Homepage/Members';

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Helmet
          title={'INTEFI CAPITAL | Sme lokální investiční skupina'}
          meta={[
            {
              name: 'description',
              // tslint:disable-next-line
              content: 'INTEFI Capital je lokální skupina s globálním přesahem s obratem přes 140 miliónu € se zaměřením na Informační technologie, Finance & Real Estate a Nakladatelství a média.',
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
