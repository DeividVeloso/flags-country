import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative"
        }}
      >
        <img
          style={{
            width: "100%",
            height: "30vh"
          }}
          src="../images/globo.jpg"
          alt="maps"
        />
        <h1
          style={{
            position: "absolute",
            top: "20%",
            left: "40%",
            color: "#000"
          }}
        >
          Guess the flag
        </h1>
      </div>
    );
  }
}
export default Header;
