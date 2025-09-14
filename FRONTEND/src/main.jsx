import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // ✅ Required for Redux
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

import App from './App.jsx';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>   {/* ✅ Wrap App with Provider */}
      <App />
    </Provider>
  </StrictMode>
);
