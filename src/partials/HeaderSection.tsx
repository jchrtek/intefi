import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Button, { ButtonKind } from '../components/Button';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import Icon, { IconType } from '../components/Icons';
import InnerHTML from '../components/InnerHTML';
import MainHeading from '../components/MainHeading';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';
import HeaderArrowBottom from './HeaderArrowBottom';

const Wrapper = styled('div')({
  paddingTop: '30px',
  paddingBottom: '30px',
});

const WebLinkWrapper = styled(FlexBox)({
  justifyContent: 'flex-end',
  zIndex: 1,
  position: 'relative',
  [media.maxM]: {
    display: 'none',
  },
});

const IconWrapper = styled('span')({
  opacity: 0.3,
});

const WebLink = styled('span')({
  color: theme.colors.white,
  fontSize: '22px',
  marginRight: '5px',
});

const ContentFlexBox = styled(FlexBox)({
  position: 'relative',
  paddingTop: '10px',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  zIndex: 1,
});

const H3SubHeading = styled('h3')({
  fontSize: '24px',
  color: theme.colors.white,
  marginTop: 0,
  marginBottom: '60px',
});

const ButtonsWrapper = styled('div')({
  position: 'relative',
  display: 'inline-block',
  marginTop: '50px',
});

const SidesImages = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  top: '10px',
  zIndex: 0,
});

const Image = styled('div')({
  width: '100%',
  position: 'relative',
  [media.maxM]: {
    display: 'none',
  },
});

const LeftImage = styled(Image)({
  maxWidth: '390px',
  left: '-130px',
  [media.md]: {
    left: '-70px',
  },
});

const RightImage = styled(Image)({
  maxWidth: '330px',
  right: '-70px',
  [media.md]: {
    right: '30px',
  },
});

const MobileImageTop = styled('div')({
  position: 'absolute',
  width: '110%',
  maxWidth: '320px',
  top: '-20px',
  display: 'none',
  [media.maxM]: {
    display: 'block',
  },
});

const MobileImageBottom = styled('div')({
  position: 'relative',
  width: '110%',
  top: '-40px',
  maxWidth: '350px',
  display: 'none',
  [media.maxM]: {
    display: 'block',
  },
});

class HeaderSection extends React.Component {
  render() {
    return (
      <Section>
        <HeaderArrowBottom />
        <Wrapper>
          <Container>
            <WebLinkWrapper>
              <a href="//blueberry.io/" target="_blank">
                <WebLink>blueberry.io</WebLink>
                <IconWrapper>
                  <Icon width={12} height={12} icon={IconType.LinkArrow} />
                </IconWrapper>
              </a>
            </WebLinkWrapper>
            <StaticQuery
              query={graphql`
                query {
                  right: file(relativePath: { eq: "header-right.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  left: file(relativePath: { eq: "header-left.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  top: file(relativePath: { eq: "header-mobile-top.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  bottom: file(relativePath: { eq: "header-mobile-bottom.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={(data: DataType<'left' | 'right' | 'top' | 'bottom'>) => (
                <>
                  <ContentFlexBox>
                    <Icon width={180} height={45} icon={IconType.Logo} />
                    <MobileImageTop>
                      <Img fluid={data.top.childImageSharp.fluid} />
                    </MobileImageTop>
                    <MainHeading>{t('intro_heading')}</MainHeading>
                    <H3SubHeading>{t('intro_sub_heading')}</H3SubHeading>
                    <MobileImageBottom>
                      <Img fluid={data.bottom.childImageSharp.fluid} />
                    </MobileImageBottom>
                    <Paragraph color={theme.colors.white} maxWidth={650}>
                      <InnerHTML content={t('intro_paragraph')} />
                    </Paragraph>
                    <ButtonsWrapper>
                      <Button kind={ButtonKind.White} last={true} scrolled link="videos">
                        {t('intro_button')}
                      </Button>
                    </ButtonsWrapper>
                  </ContentFlexBox>
                  <SidesImages>
                    <LeftImage>
                      <Img fluid={data.left.childImageSharp.fluid} />
                    </LeftImage>
                    <RightImage>
                      <Img fluid={data.right.childImageSharp.fluid} />
                    </RightImage>
                  </SidesImages>
                </>
              )}
            />
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default HeaderSection;
