import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import './design/index.scss';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);