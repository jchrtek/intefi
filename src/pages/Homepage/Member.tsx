import React from 'react';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';

interface GroupProps {
  alt: string,
  imagePath: string,
  width: number,
  link?: string,
}

const StyledMember = styled('li')({
  margin: '0 0 25px',
  width: 'calc(50% - 10px)',
  height: 105,
  [media.m]: {
    width: 'calc(33.333% - 20px)',
    height: 146,
  },
  [media.md]: {
    width: 'calc(20% - 29px)',
  }
});

const linkStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px dashed ${colors.grey}`,
  background: colors.white,
}

const StyledMemeberLink = styled('a')({
  ...linkStyles,
  ':hover': {
    borderColor: colors.black,
  }
})

const StyledMemeberSpan = styled('a')({
  ...linkStyles
})

const StyledImg = styled('img')(({ width }) => ({
  width: `${width / 1.88}%`,
  maxWidth: `${width}px`,
  maxHeight: '85%',
}));

class Groups extends React.Component<GroupProps> {
  render() {
    const { imagePath, alt, width, link } = this.props;

    if (link) {
      return (
        <StyledMember>
          <StyledMemeberLink href={link} target="_blank">
            <StyledImg src={imagePath} alt={alt} width={width} />
          </StyledMemeberLink>
        </StyledMember>
      )
    }
    return (
      <StyledMember>
        <StyledMemeberSpan>
          <StyledImg src={imagePath} alt={alt} width={width} />
        </StyledMemeberSpan>
      </StyledMember>
    )
  }
}

export default Groups;
