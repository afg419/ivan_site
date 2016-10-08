import React from 'react';

var Calendar = React.createClass({
  render(){
    return (
      <div>
        {this.props.content.header}
      </div>
    );
  }
});
export default Calendar;
