import React from 'react';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import InnerHTML from '../components/InnerHTML';
import NumberItem, { NumberItemType } from '../components/NumberItem';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';
import SlantBackground from '../components/SlantBackground';
import SubHeading from '../components/SubHeading';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { t } from '../translations';

const Wrapper = styled('div')({
  paddingTop: '0',
  paddingBottom: '30px',
});

const ContentFlexBox = styled(FlexBox)({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '20px',
});

const FlexChild = styled('div')({
  marginTop: '30px',
  width: '45%',
  boxSizing: 'border-box',
  [media.maxM]: {
    width: '100%',
  },
});

const H3SubHeading = styled('h3')({
  marginTop: '5px',
  marginBottom: '5px',
  fontSize: '20px',
});

class FinalWaySection extends React.Component {
  render() {
    return (
      <Section marginTop={100} background={theme.colors.lighterBlue}>
        <SlantBackground bottom={100} top={-150} color={theme.colors.lighterBlue} angle={6} />
        <Wrapper>
          <Container>
            <SubHeading withoutMT>{t('final_heading')}</SubHeading>
            <Paragraph maxWidth={850}>{t('final_paragraph')}</Paragraph>
            <ContentFlexBox>
              <FlexChild>
                <NumberItem type={NumberItemType.big} num={1}>
                  <H3SubHeading>{t('final_1_subheading')}</H3SubHeading>
                  <Paragraph maxWidth={550}>
                    <InnerHTML content={t('final_1_paragraph')} />
                  </Paragraph>
                </NumberItem>
              </FlexChild>
              <FlexChild>
                <NumberItem type={NumberItemType.big} num={2}>
                  <H3SubHeading>{t('final_2_subheading')}</H3SubHeading>
                  <Paragraph maxWidth={550}>
                    <InnerHTML content={t('final_2_paragraph')} />
                  </Paragraph>
                </NumberItem>
              </FlexChild>
              <FlexChild>
                <NumberItem type={NumberItemType.big} num={3}>
                  <H3SubHeading>{t('final_3_subheading')}</H3SubHeading>
                  <Paragraph maxWidth={550}>
                    <InnerHTML content={t('final_3_paragraph')} />
                  </Paragraph>
                </NumberItem>
              </FlexChild>
              <FlexChild>
                <NumberItem type={NumberItemType.big} num={4}>
                  <H3SubHeading>{t('final_4_subheading')}</H3SubHeading>
                  <Paragraph maxWidth={550}>
                    <InnerHTML content={t('final_4_paragraph')} />
                  </Paragraph>
                </NumberItem>
              </FlexChild>
            </ContentFlexBox>
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default FinalWaySection;
