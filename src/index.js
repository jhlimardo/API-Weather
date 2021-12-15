import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( 
  <BrowserRouter> {/* Sin comentarios */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
