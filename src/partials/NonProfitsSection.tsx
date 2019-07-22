import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import InnerHTML from '../components/InnerHTML';
import Paragraph from '../components/Paragraph';
import AnimationItem from '../components/parallax/AnimationItem';
import AnimationWrapper from '../components/parallax/AnimationWrapper';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import Video from '../components/Video';
import styled from '../styling/styled';
import { media } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';
import videos from '../videosList';

const Wrapper = styled('div')({
  paddingTop: '100px',
  paddingBottom: '150px',
  [media.maxM]: {
    paddingTop: '200px',
    paddingBottom: '50px',
  },
});

const ContentFlexBox = styled(FlexBox)({
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '50px',
  [media.s]: {
    paddingBottom: '50px',
  },
  [media.m]: {
    flexDirection: 'row',
  },
  [media.md]: {
    alignItems: 'stretch',
    paddingBottom: '50px',
  },
  [media.l]: {
    paddingBottom: 0,
  },
});

const RightSide = styled('div')({
  position: 'absolute',
  right: 'auto',
  left: '15%',
  top: '-50px',
  width: '100%',
  maxWidth: '290px',
  [media.s]: {
    right: '15%',
    left: 'auto',
  },
  [media.m]: {
    right: '-150px',
    top: '150px',
    maxWidth: '450px',
  },
  [media.md]: {
    position: 'relative',
    maxWidth: '550px',
    top: '20px',
    left: '100px',
    width: '60%',
  },
});

const LeftSide = styled('div')({
  position: 'relative',
  paddingBottom: 0,
  width: '100%',
  paddingTop: '60px',
  [media.m]: {
    width: '55%',
  },
});

const AnimationWrapperContent = styled('div')({
  maxWidth: '100%',
  position: 'relative',
  height: '400px',
});

const VideoWrapper = styled(FlexBox)({
  flexWrap: 'wrap',
  margin: '100px -1% 0',
  justifyContent: 'center',
  paddingTop: '30px',
});

class NonProfitsSection extends React.Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <Container>
            <ContentFlexBox>
              <LeftSide>
                <SubHeading withoutMT>{t('non_profit_heading')}</SubHeading>
                <Paragraph maxWidth={550}>
                  <InnerHTML content={t('non_profit_paragraph')} />
                </Paragraph>
              </LeftSide>
              <RightSide>
                <StaticQuery
                  query={graphql`
                    query {
                      app: file(relativePath: { eq: "app_flipped.png" }) {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  `}
                  render={(data: DataType<'app'>) => (
                    <AnimationWrapper
                      render={state => (
                        <AnimationWrapperContent>
                          <AnimationItem
                            startTop={-180}
                            endTop={-150}
                            wrapperHeight={state.animationWrapperHeight}
                            wrapperPosition={state.wrapperTopPosition}
                          >
                            <Img fluid={data.app.childImageSharp.fluid} />
                          </AnimationItem>
                        </AnimationWrapperContent>
                      )}
                    />
                  )}
                />
              </RightSide>
            </ContentFlexBox>
            <VideoWrapper id="videos">
              {videos.map((item, index) => (
                <Video key={index} id={item.id} title={item.title} image={item.image} />
              ))}
            </VideoWrapper>
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default NonProfitsSection;
