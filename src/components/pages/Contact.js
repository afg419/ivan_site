import React  from 'react';

var Contact = React.createClass({
  render(){
    return (
      <div>
        {this.props.content.header}
      </div>
    );
  }
});
export default Contact;
