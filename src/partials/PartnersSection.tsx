import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import Section from '../components/Section';
import SlantBackground from '../components/SlantBackground';
import SubHeading from '../components/SubHeading';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';

const Wrapper = styled('div')({
  paddingTop: 0,
  paddingBottom: '150px',
});

const ButtonsWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

const Partners = styled(FlexBox)({
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '100px',
  [media.maxM]: {
    flexDirection: 'column',
  },
});

const EditedSubHeading = styled(SubHeading)({
  margin: 0,
});

const FlexChild = styled('div')({
  width: '33%',
});

const FirstChild = styled(FlexChild)({
  maxWidth: '500px',
  [media.maxM]: {
    width: '100%',
    maxWidth: 'none',
    textAlign: 'center',
  },
});

const SecondChild = styled(FlexChild)({
  maxWidth: '220px',
  [media.maxM]: {
    width: '100%',
    marginTop: '30px',
  },
});

const ThirdChild = styled(FlexChild)({
  maxWidth: '150px',
  [media.maxM]: {
    width: '100%',
    marginTop: '30px',
  },
});

class PartnersSection extends React.Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <SlantBackground bottom={0} top={-300} color={theme.colors.white} angle={-10} />
          <Container>
            <Partners>
              <StaticQuery
                query={graphql`
                  query {
                    techSoup: file(relativePath: { eq: "logo-techsoup.png" }) {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    nadace: file(relativePath: { eq: "logo-nadace.png" }) {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                `}
                render={(data: DataType<'techSoup' | 'nadace'>) => (
                  <>
                    <FirstChild>
                      <EditedSubHeading>{t('partners_title')}</EditedSubHeading>
                    </FirstChild>
                    <SecondChild>
                      <a href="https://www.techsoup.cz/?utm_source=Web%20BB%20NGO&utm_medium=logo" target="_blank">
                        <Img fluid={data.techSoup.childImageSharp.fluid} />
                      </a>
                    </SecondChild>
                    <ThirdChild>
                      <a href="https://neziskovky.cz/?utm_source=Web%20BB%20NGO&utm_medium=logo" target="_blank">
                        <Img fluid={data.nadace.childImageSharp.fluid} />
                      </a>
                    </ThirdChild>
                  </>
                )}
              />
            </Partners>
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default PartnersSection;
