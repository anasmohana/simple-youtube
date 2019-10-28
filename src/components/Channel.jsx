import React, { Component } from "react";
import "../style/channel.css";

class Channel extends Component {
  render() {
    return (
      <li
        className={this.getBadgeClasses()}
        onClick={() => this.props.onSelect(this.props.channel)}
      >
        {this.props.channel.name}
      </li>
    );
  }

  getBadgeClasses() {
    let classes = "list-group-item mr-3 ";
    classes += this.props.channel.selected ? "active" : "";
    return classes;
  }
}
export default Channel;
