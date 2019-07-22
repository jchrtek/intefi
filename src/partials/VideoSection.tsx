import React from 'react';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';
import SlantBackground from '../components/SlantBackground';
import SubHeading from '../components/SubHeading';
import styled from '../styling/styled';
import { theme } from '../styling/theme';
import { t } from '../translations';

const Wrapper = styled('div')({
  paddingTop: '30px',
  paddingBottom: '30px',
});

const ContentFlexBox = styled(FlexBox)({
  position: 'relative',
  paddingTop: '10px',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
});

const EditedSubHeading = styled(SubHeading)({
  marginBottom: '15px',
  marginTop: '10px',
});

const Video = styled('iframe')({
  width: '100%',
  maxWidth: '800px',
  height: '450px',
  marginTop: '50px',
});

const renderVideo = () => {
  return (
    // tslint:disable-next-line:max-line-length
    <Video
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      src="https://www.youtube.com/embed/1ZScse5DdMY"
      width="600"
      height="400"
    />
  );
};

class VideoSection extends React.Component {
  render() {
    return (
      <Section>
        <SlantBackground bottom={-400} top={500} color={theme.colors.lighterBlue} angle={6} />
        <Wrapper>
          <Container>
            <ContentFlexBox>
              <EditedSubHeading>{t('video_heading')}</EditedSubHeading>
              <Paragraph maxWidth={650}>{t('video_paragraph')}</Paragraph>
              {renderVideo()}
            </ContentFlexBox>
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default VideoSection;
