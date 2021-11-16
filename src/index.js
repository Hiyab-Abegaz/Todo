import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import FavoritesContext from './store/favorites-contex';

ReactDOM.render(
<FavoritesContext>
<BrowserRouter>
<App />
</BrowserRouter>
</FavoritesContext>,
document.getElementById('root')
);
