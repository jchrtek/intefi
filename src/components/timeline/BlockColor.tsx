import styled from '../../styling/styled';
import { media, theme } from '../../styling/theme';

export enum ShapeType {
  circle = 'circle',
  rectangle = 'rectangle',
}

interface BlockColorProps {
  backgroundColor?: string;
  withBorder?: boolean;
  children: React.ReactNode;
  size: number;
  shape: ShapeType;
  x?: number;
  y?: number;
  xMobile?: number;
}

const getBorderStyles = (withBorder: boolean) => {
  if (withBorder) {
    return {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.colors.border,
      zIndex: 2,
    };
  }

  return {
    zIndex: 3,
  };
};

const getShapeStyles = (shape: ShapeType, size: number) => {
  switch (shape) {
    case ShapeType.circle:
      return {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '100%',
      };
    case ShapeType.rectangle:
      return {
        width: `${size}px`,
      };
  }
};

const BlockColorElement = styled('div')<BlockColorProps>(
  ({ backgroundColor = theme.colors.primary, withBorder = false, x, y, shape, size, xMobile }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    left: x ? `${x}%` : 'auto',
    marginTop: y ? `${y}%` : 'auto',
    padding: '40px 30px',
    background: backgroundColor,
    boxSizing: 'border-box',
    ...getShapeStyles(shape, size),
    ...getBorderStyles(withBorder),
    [media.maxS]: {
      left: xMobile ? `${xMobile}%` : 'auto',
      padding: '30px 20px',
      ...getShapeStyles(shape, size * 0.8),
    },
  }),
);

const BlockColor = ({ backgroundColor, children, x, y, shape, size, withBorder, xMobile }: BlockColorProps) => (
  <BlockColorElement
    backgroundColor={backgroundColor}
    x={x}
    y={y}
    shape={shape}
    size={size}
    withBorder={withBorder}
    xMobile={xMobile}
  >
    {children}
  </BlockColorElement>
);

export default BlockColor;
