import React  from 'react';

var PersonalTrainer = React.createClass({
  render(){
    return (
      <div>
        {this.props.content.header}
      </div>
    );
  }
});

export default PersonalTrainer;
