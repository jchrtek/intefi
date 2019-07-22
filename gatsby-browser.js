/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import AppWrapper from './src/AppWrapper';
import './src/assets/styles/global.css';

export const wrapRootElement = AppWrapper;

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(r => r.unregister());
  });
}
