import React from 'react';
import imgLogo from '../../assets/images/logo.svg';
import Container from '../../components/Container';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';

const StyledHeader = styled('header')({
  padding: '6px 0 3px 0',
  backgroundColor: colors.black,
  [media.m]: {
    padding: '25px 0',
  }
});

const StyledLogo = styled('img')({
  marginLeft: 12,
  width: 72,
  [media.m]: {
    marginLeft: 0,
    width: 118
  }
});

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Container>
          <StyledLogo src={imgLogo} alt="InTeFi Capital a.s." />
        </Container>
      </StyledHeader >
    )
  }

}

export default Header;
