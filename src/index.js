import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import 'typeface-roboto';

ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));

serviceWorker.unregister();