import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import ServicesSingle from "./pages/ServicesSingle";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/services/:slug" component={ServicesSingle} />
          <Route path="/post/:slug" component={Post} />

          <Route path="/blog">
            <Blog /> {/* Blog Pages */}
          </Route>
          <Route path="/contact">
            <Contact /> {/* Contact Pages */}
          </Route>
          <Route path="/services">
            <Services /> {/* Services Pages */}
          </Route>
          <Route path="/about">
            <AboutUs /> {/* About Us Pages */}
          </Route>
          <Route path="/">
            <Home /> {/* Home Pages */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
