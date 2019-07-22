import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Container from '../components/Container';
import Icon, { IconType } from '../components/Icons';
import AnimationItem from '../components/parallax/AnimationItem';
import AnimationStaticItem from '../components/parallax/AnimationStaticItem';
import AnimationWrapper from '../components/parallax/AnimationWrapper';
import Section from '../components/Section';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';

const Wrapper = styled('div')({
  paddingTop: '150px',
  paddingBottom: '100px',
  [media.s]: {
    paddingTop: 0,
  },
});

const FirstImageWrapper = styled('div')({
  maxWidth: '530px',
  width: '100%',
  position: 'absolute',
  right: '-15%',
  [media.xs]: {},
  [media.s]: {
    right: '-5%',
  },
  [media.m]: {
    right: '5%',
  },
  [media.md]: {
    right: '15%',
  },
});

const SecondImageWrapper = styled('div')({
  maxWidth: '290px',
  width: '100%',
  position: 'absolute',
  left: '-15%',
  [media.s]: {
    left: '-5%',
  },
  [media.m]: {
    left: '5%',
    maxWidth: '330px',
  },
  [media.md]: {
    left: '15%',
  },
});

const Quote = styled('div')({
  position: 'relative',
  maxWidth: '650px',
  fontSize: '25px',
  margin: '0 auto',
  textAlign: 'center',
  color: theme.colors.darkBlue,
  zIndex: 1,
  [media.m]: {
    fontSize: '30px',
  },
});

const QuoteIcon = styled('div')({
  position: 'absolute',
  right: '100px',
  top: '100px',
  display: 'none',
  zIndex: -1,
  [media.m]: {
    display: 'block',
  },
});

const AnimationWrapperContent = styled('div')({
  maxWidth: '100%',
  position: 'relative',
  height: '700px',
});

class QuoteSection extends React.Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <Container>
            <StaticQuery
              query={graphql`
                query {
                  cheers: file(relativePath: { eq: "cheers.jpg" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  cut: file(relativePath: { eq: "cut.jpg" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={(data: DataType<'cheers' | 'cut'>) => (
                <AnimationWrapper
                  render={state => (
                    <AnimationWrapperContent>
                      <AnimationItem
                        startTop={-150}
                        endTop={0}
                        wrapperHeight={state.animationWrapperHeight}
                        wrapperPosition={state.wrapperTopPosition}
                      >
                        <FirstImageWrapper>
                          <Img fluid={data.cheers.childImageSharp.fluid} />
                        </FirstImageWrapper>
                      </AnimationItem>
                      <AnimationStaticItem startTop={250}>
                        <SecondImageWrapper>
                          <Img fluid={data.cut.childImageSharp.fluid} />
                        </SecondImageWrapper>
                      </AnimationStaticItem>
                      <AnimationItem
                        startTop={600}
                        endTop={450}
                        wrapperHeight={state.animationWrapperHeight}
                        wrapperPosition={state.wrapperTopPosition}
                      >
                        <Quote>
                          {t('quote_pargraph')}
                          <QuoteIcon>
                            <Icon width={110} icon={IconType.Quote} />
                          </QuoteIcon>
                        </Quote>
                      </AnimationItem>
                    </AnimationWrapperContent>
                  )}
                />
              )}
            />
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default QuoteSection;
