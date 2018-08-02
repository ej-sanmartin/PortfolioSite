import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Playfair Display: 400, 700", "serif"]
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
