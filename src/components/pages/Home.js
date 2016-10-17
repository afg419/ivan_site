import React  from 'react';

var Home = React.createClass({
  render(){
    return (
      <div>
        <h1 style={{textAlign: "center", color: "white"}}>{this.props.content.header}</h1>
        <h4 style={{textAlign: "center", color: "#4e575c"}}>{this.props.content.subheader}</h4>
        <div className="horizontal-large-rule"></div>
        <div className="content-holder">
          <p style={{}}> {this.props.content.paragraph1}</p>
          <p style={{}}>{this.props.content.paragraph2}</p>
        </div>
        <div style={{height: "92", backgroundColor:"rgba(0,0,0,0.55)"}}></div>
      </div>
    );
  }
});

export default Home;
