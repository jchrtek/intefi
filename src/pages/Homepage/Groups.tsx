import React from 'react';
import imgFinance from '../../assets/images/finance.jpg';
import imgFinanceLg from '../../assets/images/finance-lg.jpg';
import imgIt from '../../assets/images/it.jpg';
import imgItLg from '../../assets/images/it-lg.jpg';
import imgLogo from '../../assets/images/logo.svg';
import imgPublishing from '../../assets/images/publishing.jpg';
import imgPublishingLg from '../../assets/images/publishing-lg.jpg';
import Container from '../../components/Container';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';
import Group from './Group';

const StyledWrapper = styled('div')({
  margin: '36px 0 0',
  [media.m]: {
    marginTop: 80,
  }
});

const StyledGroups = styled('div')({
  [media.m]: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  }
});

class Groups extends React.Component {
  render() {
    return (
      <StyledWrapper id="groups">
        <Container bolderPadding notFluid>
          <StyledGroups>

            <Group
              title="Informační technologie"
              imagePath={imgIt}
              imagePathLg={imgItLg}
              color="red"
            />
            <Group
              title="Nakladateství <span style='white-space: nowrap;'>a média</span>"
              imagePath={imgPublishing}
              imagePathLg={imgPublishingLg}
              color="blue"
            />
            <Group
              title="Finance <span style='white-space: nowrap;'>& real estate</span>"
              imagePath={imgFinance}
              imagePathLg={imgFinanceLg}
              color="green"
            />
          </StyledGroups>
        </Container>
      </StyledWrapper >
    )
  }

}

export default Groups;
