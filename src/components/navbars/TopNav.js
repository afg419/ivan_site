import React  from 'react';


var TopNav = React.createClass({
  render(){
    var setCurrentPage = this.props.setCurrentPage;
    return (
      <nav id="largeNavbar">
       <div className="nav-wrapper">
         <ul className="topNav">
           <li><a onClick={setCurrentPage("about")}>ABOUT IVAN</a></li>
           <li><a onClick={setCurrentPage("personalTrainer")}>PERSONAL TRAINING</a></li>
           <li><a onClick={setCurrentPage("massageTrainer")}>MASSAGE THERAPY</a></li>
           <li><a onClick={setCurrentPage("scheduling")}>SCHEDULING</a></li>
           <li><a onClick={setCurrentPage("calendar")}>CALENDAR</a></li>
           <li><a onClick={setCurrentPage("contact")}>CONTACT</a></li>
           <li><a id="right-side-nav" onClick={setCurrentPage("home")}>LOGO</a></li>
        </ul>
     </div>
    </nav>
    );
  }
});

export default TopNav;
