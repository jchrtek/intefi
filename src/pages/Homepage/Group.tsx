import React from 'react';
import imgLogo from '../../assets/images/logo.svg';
import Container from '../../components/Container';
import InnerHTML from '../../components/InnerHTML';
import Picture from '../../components/Picture';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';

interface GroupProps {
  title: string,
  imagePath: string,
  imagePathLg: string,
  color: 'green' | 'red' | 'blue',
}

const setColor = (color: string) => {
  switch(color) {
    case 'red':
      return  colors.red
    case 'blue':
      return  colors.blue
    case 'green':
      return  colors.green
    default:
      return {}
  }
}

const StyledGroup = styled('div')(({ color }) => ({
  margin: '30px 0 0',
  color: setColor(color),
  [media.m]: {
    width: 'calc(33.33% - 33px)'
  }
}));

const StyledHeading = styled('h3')({
  margin: '0 0 14px',
  fontSize: '20px',
  fontWeight: 300,
  textAlign: 'center',
  textTransform: 'uppercase',
  [media.m]: {
    fontSize: '25px',
  },
  [media.md]: {
    fontSize: '30px',
  }
});

const StyledImgWrapper = styled('div')({
  padding: '13px 0 12px',
  position: 'relative',
  borderWidth: '1px 0',
  borderStyle: 'solid',
  [media.m]: {
    paddingTop: 16,
  },
  '::before': {
    content: '""',
    width: 8,
    height: 8,
    display: 'block',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    borderRadius: '50%',
    background: 'white',
  }
});

const StyledImg = styled('img')({
  width: '100%',
  display: 'block',
});


class Groups extends React.Component<GroupProps> {
  render() {
    const { imagePath, imagePathLg, title, color } = this.props;

    return (
      <StyledGroup color={color}>
        <StyledHeading><InnerHTML content={title} /></StyledHeading>
        <StyledImgWrapper>
          <Picture path={imagePath} pathLg={imagePathLg} alt={title} />
        </StyledImgWrapper>
      </StyledGroup>
    )
  }

}

export default Groups;
