import styled from '../styling/styled';
import { media, theme } from '../styling/theme';

interface ParagraphProps {
  color?: string;
  fontSize?: number;
  maxWidth: number;
}

const Paragraph = styled('p')<ParagraphProps>(({ color, fontSize, maxWidth }) => ({
  color,
  fontSize: `${fontSize && fontSize - fontSize / 5}px`,
  marginTop: 0,
  display: 'inline-block',
  maxWidth: `${maxWidth}px`,
  [media.m]: {
    fontSize: `${fontSize}px`,
  },
}));

Paragraph.defaultProps = {
  color: theme.colors.darkBlue,
  fontSize: 20,
};

export default Paragraph;
