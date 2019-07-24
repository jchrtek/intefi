import React from 'react';
import imgLogo from '../../assets/images/logo.svg';
import Container from '../../components/Container';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';

const StyledHeader = styled('header')({
  padding: '11px 0 5px 0',
  backgroundColor: colors.black,
  [media.m]: {
    padding: '30px 0 20px',
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
