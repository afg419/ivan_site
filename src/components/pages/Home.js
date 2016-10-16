import React  from 'react';

var Home = React.createClass({
  render(){
    return (
      <div>
        <h1 style={{textAlign: "center", color: "white"}}>{this.props.content.header}</h1>
      </div>
    );
  }
});

export default Home;
