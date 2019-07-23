import React from 'react';
import imgClaimBg from '../../assets/images/claim-bg.jpg';
import imgLogo from '../../assets/images/logo.svg';
import Container from '../../components/Container';
import Icon, { IconType } from '../../components/Icons';
import { scrollToAnchor } from '../../helpers/scrollTo';
import styled from '../../styling/styled';
import { colors, em, rem } from '../../styling/theme';

const StyledWrapper = styled('div')({
  padding: '16px 0 8px',
  backgroundImage: `url('${imgClaimBg}')`,
  backgroundSize: 'cover'
});

const StyledHeading = styled('h1')({
  margin: '0',
});

const StyledClaimWrapper = styled('div')({
  margin: '24px 0 9px',
  textAlign: 'center',
})

const StyledClaim = styled('p')({
  margin: '0',
  fontWeight: 900,
  fontSize: rem(21),
  lineHeight: 1,
  textAlign: 'left',
  textTransform: 'uppercase',
  textShadow: '0px 1px 3px #333',
  display: 'inline-block',
  color: colors.white,
});

const StyledClaimSmall = styled('small')({
  margin: '0',
  paddingLeft: em(18, 15),
  fontWeight: 300,
  fontSize: em(15, 21),
});

const StyledLogo = styled('img')({
  margin: '0 auto',
  width: '72px',
  display: 'block',
});

const StyledArrowLink = styled('a')({
  margin: '0 auto',
  width: '16px',
  display: 'block',
});

const StyledArrowLinkIcon = styled(Icon)({
  width: '100%',
  display: 'block',
  background: 'yellow'
});


class Header extends React.Component {
  scrollToAnchor(event) {
    scrollToAnchor(event, 'groups', 20)
  }

  render() {
    return (
      <StyledWrapper>
        <Container>
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
            <StyledArrowLinkIcon width={16} height={9} icon={IconType.ArrowBottom} />
          </StyledArrowLink>
        </Container>
      </StyledWrapper >
    )
  }

}

export default Header;
