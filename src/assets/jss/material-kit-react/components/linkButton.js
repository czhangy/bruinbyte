import React from "react";

class LinkButton extends React.Component {
  handleClick() {
    window.location.assign("/profile-page");
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Go to Profile page</button>
    );
  }
}

export default LinkButton;
