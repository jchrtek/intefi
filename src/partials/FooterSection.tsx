import React from 'react';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import Icon, { IconType } from '../components/Icons';
import Section from '../components/Section';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';

const Wrapper = styled('div')({
  background: theme.colors.darkBlue,
  color: theme.colors.white,
  marginBottom: '-1px',
});

const ContentFlexBox = styled(FlexBox)({
  position: 'relative',
  paddingTop: '80px',
  paddingBottom: '80px',
  flexDirection: 'column',
  [media.md]: {
    flexDirection: 'row',
  },
});

const LeftBox = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  [media.s]: {
    flexDirection: 'row',
  },
  [media.md]: {
    width: '60%',
  },
});

const RightBox = styled('div')({
  width: '100%',
  display: 'flex',
  height: '100px',
  justifyContent: 'center',
  alignItems: 'flex-end',
  [media.md]: {
    height: 'auto',
    width: '40%',
    justifyContent: 'flex-end',
  },
});

const SocialIconWrapper = styled('div')({
  maxWidth: '260px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ColumnBlock = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
  marginBottom: '50px',
  [media.s]: {
    marginBottom: 0,
    width: '33%',
  },
  [media.md]: {
    width: '27%',
  },
});

const SecondColumnBlock = styled(ColumnBlock)({
  paddingLeft: 0,
  boxSizing: 'border-box',
  [media.s]: {
    paddingLeft: '20px',
  },
});

const ThirdColumnBlock = styled(ColumnBlock)({
  width: '100%',
  justifyContent: 'flex-start',
  [media.s]: {
    width: '33%',
  },
  [media.md]: {
    width: '46%',
  },
});

const CopyBlock = styled('div')({
  color: '#3f4872',
  fontSize: '12px',
  [media.maxMD]: {
    marginTop: '20px',
  },
});

const Title = styled('h4')({
  marginBottom: '30px',
  marginTop: '0px',
  fontWeight: 600,
  fontSize: '14px',
});

const Item = styled('a')({
  marginBottom: '5px',
  fontSize: '14px',
  [':last-child']: {
    marginBottom: 0,
  },
});

class FooterSection extends React.Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <Container>
            <ContentFlexBox>
              <LeftBox>
                <ColumnBlock>
                  <Icon width={110} height={25} icon={IconType.Logo} />
                  <CopyBlock>
                    <div>{t('footer_copy')}</div>
                    <a href="//blueberry.io/use-of-cookies" target="_blank">
                      {t('footer_cookies')}
                    </a>
                    <div>
                      <a href="//ngo.blueberry.io/pravidla-souteze-bb-neziskovkam.pdf" target="_blank">
                        {t('footer_gdpr')}
                      </a>
                    </div>
                  </CopyBlock>
                </ColumnBlock>
                <SecondColumnBlock>
                  <Title>{t('footer_title_1')}</Title>
                  <Item href="//blog.blueberry.io" target="_blank">
                    {t('footer_item_1')}
                  </Item>
                  <Item href="//blueberry.io" target="_blank">
                    {t('footer_item_2')}
                  </Item>
                  <Item href="//career.blueberry.io" target="_blank">
                    {t('footer_item_3')}
                  </Item>
                  <Item href="//birthday10.blueberry.io" target="_blank">
                    {t('footer_item_4')}
                  </Item>
                  <Item href="//ngo.blueberry.io/pravidla-souteze-bb-neziskovkam.pdf" target="_blank">
                    {t('footer_item_5')}
                  </Item>
                </SecondColumnBlock>
                <ThirdColumnBlock>
                  <Title>{t('footer_title_2')}</Title>
                  <Item>{t('footer_item_pavla')}</Item>
                  <Item href="mailto:pumlaufova@blueberry.io" target="_blank">
                    pumlaufova@blueberry.io
                  </Item>
                </ThirdColumnBlock>
              </LeftBox>
              <RightBox>
                <SocialIconWrapper>
                  <a href="https://www.facebook.com/blueberrycz/" target="_blank">
                    <Icon width={15} height={32} icon={IconType.SocFacebook} />
                  </a>
                  <a href="https://twitter.com/blueberry_cz" target="_blank">
                    <Icon width={32} height={32} icon={IconType.SocTwitter} />
                  </a>
                  <a href="https://www.instagram.com/blueberry.cz" target="_blank">
                    <Icon width={30} height={32} icon={IconType.SocInstagram} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCY5maJ-fKc0PsLi9DTqVpog" target="_blank">
                    <Icon width={36} height={32} icon={IconType.SocYoutube} />
                  </a>
                </SocialIconWrapper>
              </RightBox>
            </ContentFlexBox>
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default FooterSection;
