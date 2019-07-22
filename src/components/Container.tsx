import styled from '../styling/styled';

export const CONTAINER_MAX_WIDTH = 1160;

const Container = styled('div')({
  position: 'relative',
  margin: '0 auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  maxWidth: `${CONTAINER_MAX_WIDTH}px`,
  paddingLeft: '30px',
  paddingRight: '30px',
  zIndex: 1,
  boxSizing: 'border-box',
});

export default Container;
