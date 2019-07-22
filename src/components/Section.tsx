import styled from '../styling/styled';

interface SectionProps {
  background?: string;
  marginTop?: number;
}

const Section = styled('section')(({ background, marginTop }: SectionProps) => ({
  paddingTop: '1px',
  paddingBottom: '1px',
  width: '100%',
  position: 'relative',
  background: background ? background : 'transparent',
  marginTop: `${marginTop}px`,
}));

export default Section;
