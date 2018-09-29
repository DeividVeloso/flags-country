import React from "react";

export default class Flag extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.alt} src={this.props.src} />
      </div>
    );
  }
}
