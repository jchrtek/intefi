import styled from '../styling/styled';

interface SlantBackgroundProps {
  color: string;
  angle: number;
  bottom: number;
  top: number;
}

const SlantBackground = styled('div')<SlantBackgroundProps>(({ angle, bottom, color, top }) => ({
  background: color,
  position: 'absolute',
  display: 'block',
  width: '200%',
  top: `${top}px`,
  bottom: `${bottom}px`,
  left: '-50%',
  transform: `rotate(${angle}deg)`,
  zIndex: 0,
}));

export default SlantBackground;
