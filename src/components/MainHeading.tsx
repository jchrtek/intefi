import styled from '../styling/styled';
import { media, theme } from '../styling/theme';

interface MainHeadingProps {
  color?: string;
}

const MainHeading = styled('h1')<MainHeadingProps>(({ color }) => ({
  color,
  fontSize: '45px',
  marginTop: '25px',
  marginBottom: '10px',
  [media.m]: {
    fontSize: '50px',
    lineHeight: '60px',
  },
  [media.l]: {
    fontSize: '60px',
    lineHeight: '70px',
  },
}));

MainHeading.defaultProps = {
  color: theme.colors.white,
};

export default MainHeading;
