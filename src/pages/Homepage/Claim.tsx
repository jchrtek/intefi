import React from 'react';
import imgClaimBg from '../../assets/images/claim-bg.jpg';
import imgLogo from '../../assets/images/logo.svg';
import Container from '../../components/Container';
import Icon, { IconType } from '../../components/Icons';
import { scrollToAnchor } from '../../helpers/scrollTo';
import styled from '../../styling/styled';
import { colors, em, media } from '../../styling/theme';

import videoPlaceholder from '../../assets/video/claim.jpg';
import videoMp4 from '../../assets/video/claim.mp4';
import videoWebm from '../../assets/video/claim.webm';


const StyledWrapper = styled('div')({
  position: 'relative',
})

const StyledContentWrapper = styled('div')({
  padding: '21px 0 1px',
  position: 'relative',
  backgroundImage: `url('${imgClaimBg}')`,
  backgroundSize: 'cover',
  [media.m]: {
    paddingTop: 100,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'none',
  }
});

const StyledContainer = styled(Container)({
  position: 'static',
});

const StyledHeading = styled('h1')({
  margin: '0',
});

const StyledClaimWrapper = styled('div')({
  margin: '24px 0 9px',
  textAlign: 'center',
  [media.m]: {
    margin: '53px 0 9px'
  }
})

const StyledClaim = styled('p')({
  margin: '0',
  fontWeight: 900,
  fontSize: 21,
  lineHeight: 1,
  textAlign: 'left',
  textTransform: 'uppercase',
  textShadow: '0px 1px 3px #333',
  display: 'inline-block',
  color: colors.white,
  [media.m]: {
    fontSize: 54,
    textShadow: '0px 2px 3px #000',
  },
  [media.md]: {
    fontSize: 64,
  }
});

const StyledClaimSmall = styled('small')({
  margin: '0 0 5px',
  paddingLeft: em(18, 15),
  fontWeight: 300,
  fontSize: em(15, 21),
  display: 'inline-block',
  [media.m]: {
    margin: 0,
    display: 'inline'
  }
});

const StyledLogo = styled('img')({
  margin: '0 auto',
  width: 72,
  display: 'block',
  [media.m]: {
    width: 284,
  }
});

const StyledArrowLink = styled('a')({
  margin: '0 auto',
  width: 16,
  display: 'block',
  ' svg': {
    width: 16,
    height: 9,
  },
  [media.m]: {
    position: 'absolute',
    bottom: 33,
    left: '50%',
    transform: 'translate(-50%, 0)',
    ' svg': {
      width: 36,
      height: 20,
      transform: 'translate3d(0, 0, 0)',
      transition: 'transform 0.2s ease',
    },
    ':hover': {
      ' svg': {
        transform: 'translate3d(0, 4px, 0)',
      }
    }
  }
});

const StyledVideoWrapper = styled('div')({
  width: '100%',
  height: 643,
  display: 'none',
  [media.m]: {
    display: 'block',
  }
});

const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

class Header extends React.Component {
  scrollToAnchor(event: void) {
    scrollToAnchor(event, 'groups', 20)
  }

  render() {
    return (
      <StyledWrapper>
        <StyledVideoWrapper>
          <StyledVideo id="hp-video" autoPlay muted="muted" preload="none" loop="loop">
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebm} type="video/webm; codecs=vp8, vorbis" />
            <img src={videoPlaceholder} alt="" />
          </StyledVideo>
        </StyledVideoWrapper>

        <StyledContentWrapper>
          <StyledContainer>
            <StyledHeading>
              <StyledLogo src={imgLogo} alt="InTeFi Capital a.s." />
            </StyledHeading>
            <StyledClaimWrapper>
              <StyledClaim>
                <StyledClaimSmall>Lokální skupina</StyledClaimSmall>
                <br />
                s globálním přesahem
              </StyledClaim>
            </StyledClaimWrapper>
            <StyledArrowLink href="#groups" onClick={(event) => this.scrollToAnchor(event)}>
              <Icon icon={IconType.ArrowBottom} />
            </StyledArrowLink>
          </StyledContainer>
        </StyledContentWrapper>
      </StyledWrapper>
    )
  }

}

export default Header;
