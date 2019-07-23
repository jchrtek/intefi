import React from 'react';
import Container from '../../components/Container';
import Icon, { IconType } from '../../components/Icons';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';

interface InfoBoxProps {
  icon: string;
  value: string;
  desc: string;
}

const StyledWrapper = styled('li')({
  margin: '57px 0 0',
  padding: 0,
  textAlign: 'center',
  color: colors.green,
  [media.m]: {
    width: '33.333%',
  },
  ':first-child': {
    marginTop: 52,
  },
  ':last-child': {
    marginBottom: 48,
  },
  ' svg': {
    width: 66,
    [media.m]: {
      width: 'auto',
      height: 65,
    },
    ' path, rect': {
      fill: colors.green,
    }
  },
  ' strong': {
    margin: '12px 0 0',
    fontWeight: 300,
    fontSize: '34px',
    display: 'block',
  },
  ' span': {
    fontWeight: 900,
    fontSize: '20px',
    color: colors.white,
  }
});

class InfoBox extends React.Component<InfoBoxProps> {
  render() {
    const { icon, value, desc } = this.props;

    return (
      <StyledWrapper>
        <Icon icon={IconType[icon]} />
        <strong>{value}</strong>
        <span>{desc}</span>
      </StyledWrapper >
    )
  }

}

export default InfoBox;
