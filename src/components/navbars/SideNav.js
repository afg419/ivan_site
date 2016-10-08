import React  from 'react';


var SideNav = React.createClass({
  getInitialState(){
    return {hamPushed: false};
  },

  handleHamPush(){
    var hamState = this.state.hamPushed;
    this.setState({hamPushed: !hamState});
  },

  hamOrSideNav(){
    var setCurrentPage = this.props.setCurrentPage;
    if(this.state.hamPushed){
      return (<ul className="sideNav">
        <li><a onClick={setCurrentPage("about")}>ABOUT IVAN</a></li>
        <li><a onClick={setCurrentPage("personalTrainer")}>PERSONAL TRAINING</a></li>
        <li><a onClick={setCurrentPage("massageTrainer")}>MASSAGE THERAPY</a></li>
        <li><a onClick={setCurrentPage("scheduling")}>SCHEDULING</a></li>
        <li><a onClick={setCurrentPage("calendar")}>CALENDAR</a></li>
        <li><a onClick={setCurrentPage("contact")}>CONTACT</a></li>
        <li><a id="logo" onClick={setCurrentPage("home")}>LOGO</a></li>
      </ul>);
    } else {
      return (<ul className="topNav">
                <li id="centered-logo"><a>LOGO</a></li>
                <li><a id="right-side-nav" onClick={this.handleHamPush}>MENU</a></li>
             </ul>);
    }
  },

  render(){
    return (
      <nav id="largeNavbar">
       <div className="nav-wrapper">
          {this.hamOrSideNav()}
       </div>
    </nav>
    );
  }
});

export default SideNav;
