import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClient, QueryClientProvider } from 'react-query';



const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={routes}>
       <App/>
    </QueryClientProvider>
  </React.StrictMode>
);


