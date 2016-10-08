import React  from 'react';

var About = React.createClass({
  render(){
    return (
      <div>
        {this.props.content.header}
      </div>
    );
  }
});

export default About;
