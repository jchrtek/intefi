import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Button, { ButtonKind } from '../components/Button';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import Paragraph from '../components/Paragraph';
import AnimationItem from '../components/parallax/AnimationItem';
import AnimationWrapper from '../components/parallax/AnimationWrapper';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';

const Wrapper = styled('div')({
  paddingTop: 0,
  paddingBottom: '300px',
});

const ContentFlexBox = styled(FlexBox)({
  position: 'relative',
  alignItems: 'center',
  [media.maxM]: {
    flexDirection: 'column',
  },
});

const LeftSide = styled('div')({
  position: 'relative',
  width: '55%',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: theme.colors.lightBlue,
  padding: '0 130px 40px 70px',
  boxSizing: 'border-box',
  [media.maxMD]: {
    width: '100%',
    padding: '0 60px 40px',
  },
  [media.maxM]: {
    padding: '0 20px 40px',
  },
});

const RightSide = styled('div')({
  position: 'absolute',
  width: '65%',
  left: '45%',
  [media.maxMD]: {
    bottom: '-150px',
    width: '55%',
    left: 'auto',
    right: '-100px',
  },
  [media.maxM]: {
    position: 'relative',
    width: '95%',
    bottom: '20px',
  },
});

const ButtonsWrapper = styled('div')({
  marginTop: '20px',
});

const AnimationWrapperContent = styled('div')({
  maxWidth: '100%',
  position: 'relative',
  height: '500px',
  [media.maxMD]: {
    display: 'none',
  },
});

const ForDesktopImage = styled('div')({
  display: 'none',
  [media.maxMD]: {
    display: 'block',
  },
});

class OneMillionSection extends React.Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <Container>
            <ContentFlexBox>
              <LeftSide>
                <SubHeading>{t('one_million_heading')}</SubHeading>
                <Paragraph maxWidth={550}>{t('one_million_paragraph')}</Paragraph>
                <ButtonsWrapper>
                  <Button
                    kind={ButtonKind.Primary}
                    external={true}
                    // tslint:disable-next-line:max-line-length
                    link="https://blog.blueberry.cz/blueberry-neziskovk%C3%A1m-co-si-p%C5%99edstavit-pod-mobiln%C3%AD-appkou-za-milion-6c680ccae94a"
                  >
                    {t('one_million_button')}
                  </Button>
                </ButtonsWrapper>
              </LeftSide>
              <RightSide>
                <StaticQuery
                  query={graphql`
                    query {
                      marekkarel: file(relativePath: { eq: "marekkarel.jpg" }) {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  `}
                  render={(data: DataType<'marekkarel'>) => (
                    <>
                      <AnimationWrapper
                        render={state => (
                          <AnimationWrapperContent>
                            <AnimationItem
                              startTop={150}
                              endTop={80}
                              wrapperHeight={state.animationWrapperHeight}
                              wrapperPosition={state.wrapperTopPosition}
                            >
                              <Img fluid={data.marekkarel.childImageSharp.fluid} />
                            </AnimationItem>
                          </AnimationWrapperContent>
                        )}
                      />
                      <ForDesktopImage>
                        <Img fluid={data.marekkarel.childImageSharp.fluid} />
                      </ForDesktopImage>
                    </>
                  )}
                />
              </RightSide>
            </ContentFlexBox>
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default OneMillionSection;
