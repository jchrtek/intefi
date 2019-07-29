import React from 'react';
import imgLogo from '../../assets/images/logo.svg';
import Container from '../../components/Container';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';
import Map from './Map';

const StyledFooter = styled('footer')({
  padding: '28px 0 38px',
  fontSize: 15,
  textAlign: 'center',
  background: colors.black,
  color: colors.white,
  [media.m]: {
    padding: '50px 0 38px',
    textAlign: 'left',
  }
});

const StyledFooterHolder = styled('div')({
  [media.m]: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }
});

const StyledColLogo = styled('div')({
  margin: '0 0 110px',
  position: 'relative',
  top: -2,
  [media.m]: {
    padding: '0 25px',
    marginBottom: 40,
    width: '100%',
  },
  [media.md]: {
    width: 'auto',
  }
});

const StyledColText = styled('div')({
  margin: '0 0 50px',
  [media.m]: {
    padding: '0 25px',
    maxWidth: '30%',
  }
})

const StyledColMap = styled('div')({
  [media.m]: {
    padding: '0 25px',
    maxWidth: '40%',
  }
})

const StyledLogo = styled('img')({
  width: '124px',
});

const StyledHeading = styled('h5')({
  margin: '0 0 15px',
  fontWeight: 600,
  fontSize: 14,
  textTransform: 'uppercase',
  color: colors.grey,
  [media.m]: {
    marginBottom: 20,
  }
});

const StyledList = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const StyledListItem = styled('li')({
  marginBottom: 20,
  [media.m]: {
    marginBottom: 24,
  }
});

const StyledContact = styled('p')({
  marginBottom: 20,
  [media.m]: {
    marginBottom: 60,
  }
});

const StyledContactLink = styled('a')({
  ':hover': {
    textDecoration: 'underline',
  }
});

const StyledMapWrapper = styled('div')({
  width: '100%',
  height: 192,
  background: colors.white,
  [media.m]: {
    width: 312,
    maxWidth: '100%',
  },
  ' > div': {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    filter: 'grayscale(100%)',
  }
});

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Container notFluid>
          <StyledFooterHolder>
            <StyledColLogo>
              <StyledLogo src={imgLogo} />
            </StyledColLogo>

            <StyledColText>
              <StyledHeading>Odvětví</StyledHeading>
              <StyledList>
                <StyledListItem>Informační technologie</StyledListItem>
                <StyledListItem>Nakladatelství a média</StyledListItem>
                <StyledListItem>Finance & real estate</StyledListItem>
              </StyledList>
            </StyledColText>

            <StyledColText>
              <StyledHeading>Kontakt</StyledHeading>
              <StyledContact>
                Nádražní 896/30
                <br />
                Smíchov, 150 00 Praha 5
              </StyledContact>
              <StyledContact>
                <StyledContactLink href="tel:+420123123456">+420 123 123 456</StyledContactLink>
                <br />
                <StyledContactLink href="mailto:info@intefi.cz">info@intefi.cz</StyledContactLink>
              </StyledContact>
            </StyledColText>

            <StyledColMap>
              <StyledMapWrapper>
                <Map />
              </StyledMapWrapper>
            </StyledColMap>
          </StyledFooterHolder>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer;
