import React, { useState } from "react";

const Header = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Finding Universe
      </a>
      {isLoggedIn && (
        <small className="text-white">
          Welcome {props.currentUser.firstname}
        </small>
      )}
    </nav>
  );
};

export default Header;
