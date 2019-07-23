import React from 'react';
import Container from '../../components/Container';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';
import InfoBox from './InfoBox';

const StyledWrapper = styled('div')({
  margin: '36px 0 0',
  padding: '1px 0',
  background: colors.black,
  [media.m]: {
    marginTop: 130,
  }
});

const StyledInfoBoxWrapper = styled('div')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  [media.m]: {
    padding: '10px 30px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  }
});

class Info extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <Container bolderPadding>
          <StyledInfoBoxWrapper>
            <InfoBox
              icon="Diagram"
              value="140 mil. €"
              desc="obrat"
            />
            <InfoBox
              icon="Buildings"
              value="4 mil. €"
              desc="akvizice"
            />
            <InfoBox
              icon="Employee"
              value="900+"
              desc="spolupracovníků"
            />
          </StyledInfoBoxWrapper>
        </Container>
      </StyledWrapper >
    )
  }

}

export default Info;
