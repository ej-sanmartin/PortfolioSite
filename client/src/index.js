import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import WebFont from "webfontloader";
import Favicon from "react-favicon";

WebFont.load({
  google: {
    families: ["Playfair Display: 400, 700", "serif"]
  }
});

ReactDOM.render(
  <div>
    <Favicon url="https://raw.githubusercontent.com/ej-sanmartin/PortfolioSite/master/client/public/favicon.ico" />
    <App />
  </div>
, document.getElementById('root'));
registerServiceWorker();
