import React  from 'react';

var Navbar = React.createClass({
  componentDidMount(){
    $(".button-collapse").sideNav();
  },

  render(){
    var setCurrentPage = this.props.setCurrentPage;
    return (
      // <nav>
      //   <div className="nav-wrapper">
      //     <a href="#" className="brand-logo">Logo</a>
      //     <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      //     <ul className="right hide-on-med-and-down">

      //     </ul>
      //     <ul className="side-nav">
      //       <li><a onClick={setCurrentPage("home")}>ABOUT IVAN</a></li>
      //       <li><a onClick={setCurrentPage("personalTrainer")}>PERSONAL TRAINING</a></li>
      //       <li><a onClick={setCurrentPage("massageTrainer")}>MASSAGE THERAPY</a></li>
      //       <li><a onClick={setCurrentPage("scheduling")}>SCHEDULING</a></li>
      //       <li><a onClick={setCurrentPage("calendar")}>CALENDAR</a></li>
      //       <li><a onClick={setCurrentPage("contact")}>CONTACT</a></li>
      //     </ul>
      //   </div>
      // </nav>
  <nav>
   <div className="nav-wrapper">
     <a href="#!" className="brand-logo">Logo</a>
     <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
     <ul className="right hide-on-med-and-down">
       <li><a onClick={setCurrentPage("home")}>ABOUT IVAN</a></li>
       <li><a onClick={setCurrentPage("personalTrainer")}>PERSONAL TRAINING</a></li>
       <li><a onClick={setCurrentPage("massageTrainer")}>MASSAGE THERAPY</a></li>
       <li><a onClick={setCurrentPage("scheduling")}>SCHEDULING</a></li>
       <li><a onClick={setCurrentPage("calendar")}>CALENDAR</a></li>
       <li><a onClick={setCurrentPage("contact")}>CONTACT</a></li>
    </ul>
     <ul className="side-nav" id="mobile-demo">
       <li><a onClick={setCurrentPage("home")}>ABOUT IVAN</a></li>
       <li><a onClick={setCurrentPage("personalTrainer")}>PERSONAL TRAINING</a></li>
       <li><a onClick={setCurrentPage("massageTrainer")}>MASSAGE THERAPY</a></li>
       <li><a onClick={setCurrentPage("scheduling")}>SCHEDULING</a></li>
       <li><a onClick={setCurrentPage("calendar")}>CALENDAR</a></li>
       <li><a onClick={setCurrentPage("contact")}>CONTACT</a></li>
     </ul>
   </div>
 </nav>
    );
  }
});

export default Navbar;
