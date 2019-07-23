import styled from '../styling/styled';
import { media } from '../styling/theme';

interface ContainerProps {
  bolderPadding?: boolean;
}

const Container = styled('div')<ContainerProps>(({ bolderPadding }) => ({
  margin: '0 auto',
  padding: bolderPadding ? '0 17px' : '0 10px',
  maxWidth: '1140px',
  position: 'relative',
  [media.m]: {
    padding: bolderPadding ? '0 55px' : '0 30px',
  }
}));

export default Container;
