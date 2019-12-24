import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Main from "./containers/Main";
import Splash from "./containers/Splash";
import Contact from "./containers/Contact";
import Navigation from "./components/Navigation";
import Illustrations from "./containers/Illustrations";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import posed, { PoseGroup } from "react-pose";
import Project from "./containers/Project";

import "./css/MyStyle.scss";

const RouteContainer = posed.div({
  closed: { height: 1 },
  open: { height: "auto" }
});

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <style>{"body { background-color: #63c7db }"}</style>
        </Helmet>
        <Switch>
          <Route exact path="/" render={() => null} />
          <Route path="/*" component={Navigation} />
        </Switch>
        <Route
          render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location}>
                <Switch id="route-switch" location={location}>
                  <Route exact path="/" component={Splash} />
                  <Route path="/Main" component={Main} />
                  <Route path="/Project" component={Project} />
                  <Route path="/Illustrations" component={Illustrations} />
                  <Route path="/Contact" component={Contact} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
