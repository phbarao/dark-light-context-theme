import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import Portfolio from "./pages/Portfolio";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Container} />

        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}
