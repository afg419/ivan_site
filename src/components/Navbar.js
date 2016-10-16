import React  from 'react';
import TopNav from './navbars/TopNav';
import SideNav from './navbars/SideNav';

var NavBar = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  navForCurrentPageWidth(){
    if(this.state.windowWidth > 1070){
      return <TopNav setCurrentPage={this.props.setCurrentPage} />;
    } else {
      return <SideNav setCurrentPage={this.props.setCurrentPage} />;
    }
  },

  render(){
    return (
      <div>
        {this.navForCurrentPageWidth()}
        {/*<h1>pageWidth: {this.state.windowWidth}</h1>*/}
      </div>
    );
  }
});

export default NavBar;
