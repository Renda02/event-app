import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EventPage from "./components/EventPage";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import AddEvent from "./components/AddEvent";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {" "}
        <Route path={`/events/:eventId`}>
          <EventPage />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>{" "}
        <Route path="/add-event">
          <AddEvent />
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
