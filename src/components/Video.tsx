import React from 'react';
import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import { ShopType } from '../types';
import FlexBox from './FlexBox';
import Icon, { IconType } from './Icons';

const getDefultShape = () => ({
  width: '98%',
  marginRight: '1%',
  marginLeft: '1%',
  marginBottom: '50px',
  [media.m]: {
    width: '58%',
  },
});

const getVideoHeight = () => ({
  [media.s]: {
    height: '60vw',
  },
  [media.m]: {
    height: '305px',
  },
  [media.md]: {
    height: '400px',
  },
});

const Iframes = styled(FlexBox)({
  ...getDefultShape(),
});

const VideoIframe = styled('iframe')({
  border: 'none',
  height: 'auto',
  ...getVideoHeight(),
});

const ImageWrapper = styled('div')({
  position: 'relative',
  ...getVideoHeight(),
});

const Play = styled(FlexBox)({
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

const Image = styled('img')({
  maxWidth: '100%',
});

const Title = styled('h4')({
  fontSize: '24px',
  fontWeight: 500,
  margin: '10px 0',
  textAlign: 'center',
  [media.m]: {
    fontSize: '30px',
  },
});

interface VideoState {
  loaded: boolean;
}

class Video extends React.Component<ShopType, VideoState> {
  state = {
    loaded: false,
  };

  renderIframe = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { id, image, title } = this.props;
    const { loaded } = this.state;

    return (
      <>
        <Iframes directionColumn={true}>
          {loaded ? (
            <VideoIframe
              // tslint:disable-next-line:max-line-length
              src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fbusiness.facebook.com%2Fblueberrycz%2Fvideos%2F${id}%2F&width=734&&autoplay=true&appId=434196740493456`}
              data-show-captions={false}
              allow="encrypted-media"
              allowFullScreen={true}
              data-autoplay={true}
            />
          ) : (
            <FlexBox directionColumn={true} onClick={this.renderIframe}>
              <ImageWrapper>
                <Play>
                  <Icon width={70} height={70} color={theme.colors.white} icon={IconType.Play} />
                </Play>
                <Image src={image} />
              </ImageWrapper>
            </FlexBox>
          )}
          <Title>{title}</Title>
        </Iframes>
      </>
    );
  }
}

export default Video;
