import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/index.css';
import App from './App';
import { PlayersContextProvider } from './context/PlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PlayersContextProvider>
        <App />
    </PlayersContextProvider>
    
);

