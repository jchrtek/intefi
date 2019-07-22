import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Container from '../components/Container';
import Section from '../components/Section';
import BlockColor, { ShapeType } from '../components/timeline/BlockColor';
import BlockImage from '../components/timeline/BlockImage';
import BlockJoiner from '../components/timeline/BlockJoiner';
import ContentTitle from '../components/timeline/ContentTitle';
import TimelineWrapper from '../components/timeline/TimelineWrapper';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';

const Wrapper = styled('div')({
  paddingTop: '150px',
  paddingBottom: '200px',
  background: theme.colors.lighterBlue,
  [media.maxM]: {
    paddingTop: '50px',
  },
});

const Confetti = styled('div')({
  position: 'absolute',
  width: '705px',
  height: '384px',
  marginLeft: '-50px',
  boxSizing: 'border-box',
  zIndex: 999,
  [media.maxS]: {
    display: 'none',
  },
});

const FirstConffeti = styled(Confetti)({
  width: '300px',
  marginLeft: 0,
  top: '-75px',
  height: '350px',
  display: 'none',
  [media.maxM]: {
    display: 'block',
  },
});

const SecondConffeti = styled(Confetti)({
  marginLeft: 0,
  right: '-180px',
  top: '-60px',
  [media.maxS]: {
    display: 'block',
    width: '580px',
    height: '330px',
    right: '-155px',
  },
});

const ForMobile = styled('div')({
  [media.m]: {
    display: 'none',
  },
});

const ForDesktop = styled('div')({
  position: 'relative',
  marginTop: '-60px',
  [media.maxM]: {
    display: 'none',
  },
});

class TimelineSection extends React.Component {
  render() {
    return (
      <Section background={theme.colors.lighterBlue}>
        <Wrapper>
          <Container>
            <StaticQuery
              query={graphql`
                query {
                  confetti: file(relativePath: { eq: "confetti.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  cup: file(relativePath: { eq: "cup.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  lt: file(relativePath: { eq: "left-top.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  lb: file(relativePath: { eq: "left-bottom.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  rt: file(relativePath: { eq: "right-top.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  rb: file(relativePath: { eq: "right-bottom.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  tm: file(relativePath: { eq: "top-mobile.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={(data: DataType<'confetti' | 'cup' | 'lt' | 'lb' | 'rt' | 'rb' | 'tm'>) => (
                <TimelineWrapper>
                  <BlockImage width={380} x={1} y={-5}>
                    <Img fluid={data.lt.childImageSharp.fluid} />
                  </BlockImage>
                  <BlockImage width={320} x={75} y={-9}>
                    <Img fluid={data.rt.childImageSharp.fluid} />
                  </BlockImage>
                  <BlockColor shape={ShapeType.circle} backgroundColor={theme.colors.primary} size={230}>
                    <FirstConffeti>
                      <Img fluid={data.tm.childImageSharp.fluid} />
                    </FirstConffeti>
                    <ContentTitle bold>{t('timeline_1_date')}</ContentTitle>
                    <ContentTitle>{t('timeline_1_title')}</ContentTitle>
                  </BlockColor>
                  <BlockJoiner left width={1} height={145} />
                  <BlockColor
                    shape={ShapeType.rectangle}
                    size={290}
                    backgroundColor={theme.colors.lighterBlue}
                    withBorder
                    xMobile={-15}
                    x={6}
                  >
                    <ContentTitle textColor={theme.colors.darkBlue} bold>
                      {t('timeline_2_date')}
                    </ContentTitle>
                    <ContentTitle textColor={theme.colors.darkBlue}>{t('timeline_2_title')}</ContentTitle>
                  </BlockColor>
                  <BlockColor
                    shape={ShapeType.rectangle}
                    backgroundColor={theme.colors.primary}
                    size={300}
                    x={26}
                    y={-2.5}
                    xMobile={18}
                  >
                    <ContentTitle bold>{t('timeline_3_date')}</ContentTitle>
                    <ContentTitle>{t('timeline_3_title')}</ContentTitle>
                  </BlockColor>
                  <BlockJoiner left top width={180} height={50} x={5} y={-5} />
                  <BlockColor
                    shape={ShapeType.rectangle}
                    size={320}
                    backgroundColor={theme.colors.lighterBlue}
                    withBorder
                    x={-11}
                    y={-1}
                    xMobile={-10}
                  >
                    <ContentTitle textColor={theme.colors.darkBlue} bold>
                      {t('timeline_4_date')}
                    </ContentTitle>
                    <ContentTitle textColor={theme.colors.darkBlue}>{t('timeline_4_title')}</ContentTitle>
                  </BlockColor>
                  <BlockColor
                    shape={ShapeType.rectangle}
                    backgroundColor={theme.colors.primary}
                    size={200}
                    x={-28}
                    y={-4.5}
                    xMobile={-32}
                  >
                    <ContentTitle bold>{t('timeline_5_date')}</ContentTitle>
                    <ContentTitle>{t('timeline_5_title')}</ContentTitle>
                  </BlockColor>
                  <BlockImage width={290} x={70} y={-15}>
                    <Img fluid={data.rb.childImageSharp.fluid} />
                  </BlockImage>
                  <BlockColor
                    shape={ShapeType.rectangle}
                    size={220}
                    backgroundColor={theme.colors.lighterBlue}
                    withBorder
                    x={-12}
                    y={-3}
                    xMobile={-15}
                  >
                    <ContentTitle textColor={theme.colors.darkBlue} bold>
                      {t('timeline_6_date')}
                    </ContentTitle>
                    <ContentTitle textColor={theme.colors.darkBlue}>{t('timeline_6_title')}</ContentTitle>
                  </BlockColor>
                  <BlockJoiner right top width={250} height={60} x={3} y={-5} />
                  <BlockColor
                    shape={ShapeType.rectangle}
                    size={290}
                    backgroundColor={theme.colors.lighterBlue}
                    withBorder
                    x={24}
                    y={-1}
                    xMobile={15}
                  >
                    <ContentTitle textColor={theme.colors.darkBlue} bold>
                      {t('timeline_7_date')}
                    </ContentTitle>
                    <ContentTitle textColor={theme.colors.darkBlue}>{t('timeline_7_title')}</ContentTitle>
                  </BlockColor>
                  <BlockImage width={320} x={0} y={-10}>
                    <Img fluid={data.lb.childImageSharp.fluid} />
                  </BlockImage>
                  <BlockColor
                    shape={ShapeType.rectangle}
                    backgroundColor={theme.colors.primary}
                    size={200}
                    x={13}
                    y={-2}
                    xMobile={-16}
                  >
                    <ContentTitle bold>{t('timeline_8_date')}</ContentTitle>
                    <ContentTitle>{t('timeline_8_title')}</ContentTitle>
                  </BlockColor>
                  <BlockImage width={220} x={83} y={-2}>
                    <Img fluid={data.cup.childImageSharp.fluid} />
                  </BlockImage>
                  <ForDesktop>
                    <BlockJoiner left top width={100} height={230} x={55.5} y={0} />
                  </ForDesktop>
                  <ForMobile>
                    <BlockJoiner left width={1} height={230} />
                  </ForMobile>
                  <BlockColor shape={ShapeType.circle} backgroundColor="#e44163" size={250}>
                    <SecondConffeti>
                      <Img fluid={data.confetti.childImageSharp.fluid} />
                    </SecondConffeti>
                    <ContentTitle bold>{t('timeline_9_date')}</ContentTitle>
                    <ContentTitle>{t('timeline_9_title')}</ContentTitle>
                  </BlockColor>
                </TimelineWrapper>
              )}
            />
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default TimelineSection;
