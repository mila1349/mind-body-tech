import './style.scss';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact';
import PortfolioList from './pages/portfolio/PortfolioList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Privacy from './pages/additional/Privacy';
import Terms from './pages/additional/Terms';
import Cookie from './pages/additional/Cookie';
import ScrollToTop from './effect/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>


          <Route path="/portfolio">
            <Navbar/>
            <PortfolioList/>
          </Route>

          <Route path="/products">
            <Navbar/>
            <Products/>
          </Route>

          <Route path="/contact">
            <Navbar/>
            <Contact/>
          </Route>

          <Route path="/project">
            <Navbar/>
            <Portfolio/>
          </Route>

          <Route path="/privacy">
            <Navbar/>
            <Privacy/>
          </Route>

          <Route path="/terms">
            <Navbar/>
            <Terms/>
          </Route>

          <Route path="/cookie">
            <Navbar/>
            <Cookie/>
          </Route>

          <Route exact path="/">
            <Navbar/>
            <Home/>
          </Route>

        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
