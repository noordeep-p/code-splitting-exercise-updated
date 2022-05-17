import React, { Component, Suspense } from "react";
import "./App.css";

import Page1 from "./Components/Page1";

const Page2Lazy = React.lazy(() => import("./Components/Page2"));
const Page3Lazy = React.lazy(() => import("./Components/Page3"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
    };
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    }
    if (this.state.route === "page2") {
      return <Page2Lazy onRouteChange={this.onRouteChange} />;
    }
    return <Page3Lazy onRouteChange={this.onRouteChange} />;
  }
}

export default App;
