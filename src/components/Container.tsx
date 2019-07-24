import styled from '../styling/styled';
import { media } from '../styling/theme';

interface ContainerProps {
  bolderPadding?: boolean;
  notFluid?: boolean;
}

const Container = styled('div')<ContainerProps>(({ bolderPadding, notFluid }) => ({
  margin: '0 auto',
  padding: bolderPadding ? '0 17px' : '0 10px',
  maxWidth: notFluid ? '288px' : '1140px',
  position: 'relative',
  [media.m]: {
    padding: bolderPadding ? '0 55px' : '0 30px',
    maxWidth: 1140,
  }
}));

export default Container;
