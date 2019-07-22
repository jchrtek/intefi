import * as React from 'react';
import styled from '../../styling/styled';

const Item = styled('div')<AnimationStaticItemProps>(({ startTop }) => ({
  height: '50px',
  position: 'absolute',
  width: '100%',
  top: startTop,
}));

interface AnimationStaticItemProps {
  children: React.ReactChild;
  startTop: number;
}

const AnimationStaticItem = ({ startTop, children }: AnimationStaticItemProps) => (
  <Item startTop={startTop}>{children}</Item>
);

export default AnimationStaticItem;
