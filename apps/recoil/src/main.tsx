import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RecoilRoot>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </RecoilRoot>
  </StrictMode>
);
