import React  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import PersonalTrainer from './components/pages/PersonalTrainer';
import MassageTrainer from './components/pages/MassageTrainer';
import Scheduling from './components/pages/Scheduling';
import Calendar from './components/pages/Calendar';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

const App = React.createClass({
  getInitialState(){
    return {
           currentPage: "home"
         };
  },

  pages(){
    const {home, about, personalTrainer, massageTrainer, scheduling, calendar, contact} = this.props;
    return {
                  home: <Home content={home} />  ,
                 about: <About content={about}/> ,
       personalTrainer: <PersonalTrainer content={personalTrainer}/> ,
        massageTrainer: <MassageTrainer content={massageTrainer}/> ,
            scheduling: <Scheduling content={scheduling}/> ,
              calendar: <Calendar content={calendar}/> ,
               contact: <Contact content={contact}/>
             };
  },

  getCurrentPage(currentPage){
    return this.pages()[currentPage];
  },

  setCurrentPage(pageLabel){
    return () => {
      pageLabel = pageLabel || "home";
      this.setState({ currentPage: pageLabel });
    };
  },

  render() {
    return (
      <div>
        <Navbar setCurrentPage={this.setCurrentPage}/>
        {this.getCurrentPage(this.state.currentPage)}
      </div>
    );
  }
});

export default App;

// 1. HomePage
//     1. Header
//     2. Multiple sentences
// 3. About Ivan
//     1. Header
//     2. ???
// 4. Personal Training
//     1. Header
//     2. Multiple Sentences
// 5. Massage Therapy
//     1. Header
//     2. Multiple Sentences
// 6. Scheduling
//     1. Header
//     2. SubHeader
//     3. Links to calendar
// 7. Calendar
//     1. Calendar
//     2. Bunch of other stuff
//     3. Choose a date -> choose a time -> Contact info
// 8. Contact info for scheduling…
//     1. First name
//     2. Last name
//     3. email
//     4. phone
//     5. text reminder
//     6. comment
//     7. remember me!
//     8. schedule appointment
// 9. Contact
//     1. Header
//     2. First Name
//     3. Last name
//     4. email
//     5. message
//     6. submit
