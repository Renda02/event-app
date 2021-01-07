import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EventPage from "./components/EventPage";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {" "}
        <Route path={`/events/:eventId`}>
         <EventPage/> 
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
