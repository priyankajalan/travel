import React from "react";
import SignupForm from "./SignupForm";
import ListCards from "./ListCards";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Travel the world with me"
    };
    this.signup = this.signup.bind(this);
  }

  signup(formData) {
    console.log("Submit form", formData);
  }

  render() {
    return (
      <>
        <div className="jumbotron">
          <p className="display-4">{this.state.title}</p>
        </div>
        <SignupForm signupHandler={this.signup} />
        <ListCards />
      </>
    );
  }
}

export default MainContent;
