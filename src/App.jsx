import React from "react";
import Header from "./components/Header/";
import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstname: "Priyanka",
        lastname: "Jalan"
      }
    };
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.user} />
        <MainContent />
        {/* <Footer /> */}
      </>
    );
  }
}
