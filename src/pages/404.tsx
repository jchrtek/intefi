import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Button, { ButtonKind } from '../components/Button';
import Icon, { IconType } from '../components/Icons';
import MainHeading from '../components/MainHeading';
import Paragraph from '../components/Paragraph';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';

const Wrapper = styled('div')({
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: theme.colors.primary,
});

const Content = styled('div')({
  position: 'relative',
  margin: '10vh auto',
  height: '100%',
  maxWidth: '920px',
  maxHeight: '668px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonsWrapper = styled('div')({
  position: 'relative',
  display: 'inline-block',
  marginTop: '70px',
});

const Confetti = styled('div')({
  position: 'absolute',
  maxWidth: '920px',
  maxHeight: '668px',
  width: '100%',
  height: '100%',
  marginTop: '-100px',
  top: 0,
  marginLeft: '40px',
  left: 0,
  [media.maxM]: {
    display: 'none',
  },
});

class NotFoundPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Confetti>
            <StaticQuery
              query={graphql`
                query {
                  confetti: file(relativePath: { eq: "error-confetti.png" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={(data: DataType<'confetti'>) => <Img fluid={data.confetti.childImageSharp.fluid} />}
            />
          </Confetti>
          <Icon width={180} height={45} icon={IconType.Logo} />
          <MainHeading>{t('error_parge_heading')}</MainHeading>
          <Paragraph color={theme.colors.white} maxWidth={500}>
            {t('error_parge_paragraph')}
          </Paragraph>
          <ButtonsWrapper>
            <Button kind={ButtonKind.White} link="//birthday10.blueberry.io/" last={true}>
              {t('error_parge_button')}
            </Button>
          </ButtonsWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default NotFoundPage;
