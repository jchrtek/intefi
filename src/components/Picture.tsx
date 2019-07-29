import styled from '../styling/styled';
import { breakpoints } from '../styling/theme';

interface PictureProps {
  alt: string;
  path: string;
  pathLg: string;
}

const StyledPicture = styled('picture')({
  display: 'block',
  ' img': {
    width: '100%',
    display: 'block',
  }
})

const Picture = ({ path, pathLg, alt }: PictureProps) => (
  <StyledPicture>
    <source media={`(min-width: ${breakpoints.m}px)`} srcSet={pathLg} />
    <img src={path} alt={alt} />
  </StyledPicture>
)

export default Picture
