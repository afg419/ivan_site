import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var home = function(){
  return {
    header: "TRAIN GAIN SUSTAIN",
    subheader: "BRINGING FORM, FUNCTION AND SUSTAINABILITY TOGETHER",
    paragraph1: "Here at Train Gain Sustain I strive to bring my clients private in depth Personal Training and Massage Therapy to enhance their personal wellbeing.",
    paragraph2: "Here you will not find an intimidating gym setting or find yourself in an over the top spa environment.\n I believe taking care of the body should be a simple sustainable experience.",
  };
};

ReactDOM.render(
  <App        about={{header: "ABOUT"}}
               home={home()}
    personalTrainer={{header: "PERSONALTRAINER"}}
     massageTrainer={{header: "MASSAGETRAINER"}}
            contact={{header: "CONTACT"}}
           calendar={{header: "CALENDAR"}}
         scheduling={{header: "SCHEDULING"}}
         />,
  document.getElementById('root')
);
