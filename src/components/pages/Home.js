import React  from 'react';

var Home = React.createClass({
  render(){
    return (
      <div>
        {this.props.content.header}
      </div>
    );
  }
});

export default Home;
