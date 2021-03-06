import React  from 'react';

var NavBar = React.createClass({
  getInitialState(){
    return {hamPushed: false};
  },

  toggleNav() {
    var hamState = this.state.hamPushed;
    this.setState({hamPushed: !hamState});

    if(!hamState){
      document.getElementById("sideNavMenu").style.width = "300px";
    } else {
      document.getElementById("sideNavMenu").style.width = "0";
    }
  },

  setCurrentPageAndToggleNav(pageName){
    return () => {
      this.props.setCurrentPage(pageName)();
      this.toggleNav();
    };
  },

  sideNav(){
    var setCurrentPageAndToggleNav = this.setCurrentPageAndToggleNav;
      return (
              <div id="sideNavMenu" className="sideNav">
                <a onClick={setCurrentPageAndToggleNav("about")}>ABOUT IVAN</a>
                <a onClick={setCurrentPageAndToggleNav("personalTrainer")}>PERSONAL TRAINING</a>
                <a onClick={setCurrentPageAndToggleNav("massageTrainer")}>MASSAGE THERAPY</a>
                <a onClick={setCurrentPageAndToggleNav("scheduling")}>SCHEDULING</a>
                <a onClick={setCurrentPageAndToggleNav("calendar")}>CALENDAR</a>
                <a onClick={setCurrentPageAndToggleNav("contact")}>CONTACT</a>
                <a id="logo" onClick={setCurrentPageAndToggleNav("home")}>TRAIN GAIN SUSTAIN</a>
              </div>
            );
    },

  render(){
    return (
      <nav id="largeNavbar">
          <ul className="topNav">
             <li id="centered-logo"><a onClick={this.props.setCurrentPage("home")}> TRAIN GAIN SUSTAIN</a></li>
             <li><a id="right-side-nav" onClick={this.toggleNav}>MENU</a></li>
          </ul>
          {this.sideNav()}
      </nav>
    );
  }
});

export default NavBar;
