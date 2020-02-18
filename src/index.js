import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import regeneratorRuntime from "regenerator-runtime";


ReactDOM.render(<App />, document.getElementById('app'));

