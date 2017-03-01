import React from 'react'

//this is the old way of creating components
var MyComponent = React.createClass({
  render: function() {
    return (
      <h3 className={this.props.color}>
      <span>{this.props.title}</span>
      </h3>
    )
  }
})

export default MyComponent
