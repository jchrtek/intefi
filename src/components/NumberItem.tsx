import styled from '../styling/styled';
import { media, theme } from '../styling/theme';
import FlexBox from './FlexBox';

const NumberItemWrapper = styled(FlexBox)({
  marginBottom: '20px',
});

const Num = styled('div')({
  display: 'flex',
  lineHeight: 0,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#e44163',
  boxSizing: 'border-box',
});

const NumSmall = styled(Num)({
  maxWidth: '30px',
  maxHeight: '30px',
  minWidth: '30px',
  minHeight: '30px',
  fontSize: '18px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '100%',
  borderColor: theme.colors.lightBlue,
  marginTop: '3px',
  marginRight: '20px',
});

const NumBig = styled(Num)({
  maxWidth: '60px',
  maxHeight: '80px',
  width: '100%',
  height: '80px',
  fontSize: '110px',
  fontWeight: 'bold',
  marginTop: '10px',
  marginRight: '30px',
  [media.maxM]: {
    fontSize: '70px',
    marginRight: '20px',
    maxWidth: '40px',
    height: '60px',
  },
  [media.maxS]: {
    fontSize: '50px',
    marginRight: '15px',
    maxWidth: '30px',
    height: '40px',
  },
});

export enum NumberItemType {
  small = 'small',
  big = 'big',
}

interface NumberItemProps {
  num: number;
  type: NumberItemType;
  children: React.ReactNode;
}

const selectNumberType = (type: NumberItemType, num: number) => {
  switch (type) {
    case NumberItemType.small:
      return <NumSmall>{num}</NumSmall>;

    case NumberItemType.big:
      return <NumBig>{num}</NumBig>;
  }
};

const NumberItem = ({ num, type, children }: NumberItemProps) => (
  <NumberItemWrapper>
    {selectNumberType(type, num)}
    <div>{children}</div>
  </NumberItemWrapper>
);

export default NumberItem;
