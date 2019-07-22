import styled from '../../styling/styled';
import { media } from '../../styling/theme';

interface BlockImageProps {
  children: React.ReactNode;
  width: number;
  x?: number;
  y?: number;
}

const BlockImageHackWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  [media.maxM]: {
    display: 'none',
  },
});

const BlockImageWrapper = styled('div')<BlockImageProps>(({ width, x, y }) => ({
  display: 'block',
  position: 'absolute',
  marginTop: y ? `${y}%` : 'auto',
  left: x ? `${x}%` : 'auto',
  width: `${width}px`,
  zIndex: 0,
  boxSizing: 'border-box',
}));

const BlockImage = ({ children, x, y, width }: BlockImageProps) => (
  <BlockImageHackWrapper>
    <BlockImageWrapper width={width} x={x} y={y}>
      {children}
    </BlockImageWrapper>
  </BlockImageHackWrapper>
);

export default BlockImage;
