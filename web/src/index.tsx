import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import App from './App';
import api from './services/api';

import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

(async () => {
  const { data: publicKey } = await api.get('/pagamento/public-key');

  const stripePromise = loadStripe(publicKey);

  ReactDOM.render(
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
