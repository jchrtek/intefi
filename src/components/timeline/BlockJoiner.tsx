import styled from '../../styling/styled';
import { media, theme } from '../../styling/theme';

interface BlockJoinerProps {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  width: number;
  height: number;
  x?: number;
  y?: number;
}

const BlockJoiner = styled('div')<BlockJoinerProps>(({ left, right, top, bottom, width, height, x, y }) => ({
  display: 'flex',
  position: 'relative',
  marginRight: '-5px',
  marginLeft: '-5px',
  marginTop: y ? `${y}%` : 'auto',
  left: x ? `${x}%` : 'auto',
  width: `${width}px`,
  height: `${height}px`,
  borderStyle: 'solid',
  borderColor: theme.colors.border,
  borderLeftWidth: left ? '1px' : 0,
  borderRightWidth: right ? '1px' : 0,
  borderTopWidth: top ? '1px' : 0,
  borderBottomWidth: bottom ? '1px' : 0,
  zIndex: 1,
  boxSizing: 'border-box',
  [media.maxS]: {
    height: `${height * 0.6}px`,
  },
}));

export default BlockJoiner;
