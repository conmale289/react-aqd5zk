import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import ProductAttributesForm from './attributes';
import ProductForm from './basic';
import ProductDescriptionForm from './description';
import ShippingForm from './shipping'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <p>
        <ProductForm />
      </p>
      <p>
        <ProductAttributesForm />
      </p>
      <p>
        <Demo />
      </p>
      <p style={{marginTop: '1em', marginBottom: '5em'}}>
        <ProductDescriptionForm />
      </p>
      <p><ShippingForm /></p>
    </StyledEngineProvider>
  </React.StrictMode>
);
