import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App        about={{header: "ABOUT"}}
               home={{header: "HOME"}}
    personalTrainer={{header: "PERSONALTRAINER"}}
     massageTrainer={{header: "MASSAGETRAINER"}}
            contact={{header: "CONTACT"}}
           calendar={{header: "CALENDAR"}}
         scheduling={{header: "SCHEDULING"}}
         />,
  document.getElementById('root')
);
