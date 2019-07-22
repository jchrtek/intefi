import styled from '../styling/styled';
import { media, theme } from '../styling/theme';

interface SubHeadingProps {
  color?: string;
  withoutMT?: boolean;
}

const SubHeading = styled('h2')<SubHeadingProps>(({ color, withoutMT }) => ({
  color,
  fontSize: '40px',
  marginTop: withoutMT ? 0 : '70px',
  marginBottom: '40px',
  [media.maxM]: {
    fontSize: '30px',
    marginTop: withoutMT ? 0 : '40px',
    marginBottom: '30px',
  },
}));

SubHeading.defaultProps = {
  color: theme.colors.darkBlue,
};

export default SubHeading;
