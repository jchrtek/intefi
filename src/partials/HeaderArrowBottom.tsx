import styled from '../styling/styled';
import { theme } from '../styling/theme';

const ArrowBottom = styled('div')({
  position: 'absolute',
  height: '200%',
  display: 'block',
  width: '100%',
  zIndex: 1,
  bottom: '-80px',
});

const Arrow = styled('div')({
  background: theme.colors.primary,
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '100%',
});

const LeftArrow = styled(Arrow)({
  transform: `rotate(13deg)`,
  left: '-50%',
  transformOrigin: '100% 100%',
});

const RightArrow = styled(Arrow)({
  transform: `rotate(-13deg)`,
  right: '-50%',
  transformOrigin: '0 100%',
});

const HeaderArrowBottom = () => (
  <ArrowBottom>
    <LeftArrow />
    <RightArrow />
  </ArrowBottom>
);

export default HeaderArrowBottom;
