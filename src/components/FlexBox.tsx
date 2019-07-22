import styled from '../styling/styled';

interface FlexBoxProps {
  directionColumn?: boolean;
}

const FlexBox = styled('div')<FlexBoxProps>(({ directionColumn }) => ({
  display: 'flex',
  ...(directionColumn && { flexDirection: 'column' }),
}));

export default FlexBox;
