import styled from '../../styling/styled';
import { media, theme } from '../../styling/theme';

interface ContentTitleProps {
  textColor?: string;
  bold?: boolean;
}

const ContentTitle = styled('span')<ContentTitleProps>(({ bold, textColor = theme.colors.white }) => ({
  fontSize: '22px',
  fontWeight: bold ? 'bold' : 'normal',
  color: textColor,
  marginBottom: '5px',
  display: 'inline-block',
  maxWidth: '100%',
  textAlign: 'center',
  [media.maxS]: {
    fontSize: '18px',
  },
}));

export default ContentTitle;
