import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from './styling/theme';

interface ElementType {
  // tslint:disable-next-line:no-any
  element: any;
}

export default ({ element }: ElementType) => <ThemeProvider theme={theme}>{element}</ThemeProvider>;
