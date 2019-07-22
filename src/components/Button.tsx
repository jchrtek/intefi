import React from 'react';
import { Link } from 'react-scroll';
import styled from '../styling/styled';
import { em, theme } from '../styling/theme';

export enum ButtonKind {
  Primary = 'Primary',
  White = 'White',
  Disable = 'Disable',
}

const getDefultButtonStyle = (last: boolean) => ({
  display: 'inline-block',
  padding: `${em(12, 20)} ${em(23, 20)}`,
  fontSize: '18px',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderRadius: 0,
  fontWeight: 700,
  marginBottom: '20px',
  marginRight: last ? 0 : '20px',
  cursor: 'pointer',
});

const getButtonStyle = (kind: ButtonKind) => {
  switch (kind) {
    case ButtonKind.Primary:
      return {
        borderColor: theme.colors.primary,
        [':hover']: {
          color: theme.colors.white,
          background: theme.colors.primary,
        },
      };
    case ButtonKind.White:
      return {
        color: theme.colors.white,
        borderColor: theme.colors.white,
        [':hover']: {
          color: theme.colors.primary,
          background: theme.colors.white,
        },
      };
    case ButtonKind.Disable:
      return {
        color: theme.colors.lightBlue,
        borderColor: theme.colors.lightBlue,
      };
  }
};

const ButtonElement = styled('a')<StyleButtonProps>(({ kind, last }) => ({
  ...getDefultButtonStyle(last),
  ...getButtonStyle(kind),
  transition: 'all .3s',
}));

const DisableButtonElement = styled('span')<StyleButtonProps>(({ last }) => ({
  ...getDefultButtonStyle(last),
  ...getButtonStyle(ButtonKind.Disable),
  transition: 'all .3s',
}));

const ScrollButtonElement = styled(Link)<StyleButtonProps>(({ kind, last }) => ({
  ...getDefultButtonStyle(last),
  ...getButtonStyle(kind),
  transition: 'all .3s',
}));

interface StyleButtonProps {
  kind: ButtonKind;
  last: boolean;
}

interface Props extends StyleButtonProps {
  link: string;
  external?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  scrolled?: boolean;
}

class Button extends React.Component<Props> {
  static defaultProps = {
    last: false,
  };

  render() {
    const { last, scrolled, link, disabled, external, kind, children } = this.props;

    if (disabled) {
      return (
        <DisableButtonElement kind={kind} last={last}>
          {children}
        </DisableButtonElement>
      );
    }

    if (scrolled) {
      return (
        <ScrollButtonElement duration={1000} smooth={true} kind={kind} last={last} to={link}>
          {children}
        </ScrollButtonElement>
      );
    }

    return (
      <ButtonElement last={last} kind={kind} href={link} target={external ? '_blank' : '_self'}>
        {children}
      </ButtonElement>
    );
  }
}

export default Button;
