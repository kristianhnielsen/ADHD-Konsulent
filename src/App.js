import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './About/About';
import Consultation from './Consultation/Consultation';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Index';
import NotFound from './ErrorPages/NotFound';
import Price from './Price/Price';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
          <title>ADHD OG AUTISME KONSULENT</title>
          <link rel="canonical" href="https://adhd-konsulent.dk/" />
      </Helmet>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/radgivning" component={Consultation} />
          <Route path="/pris" component={Price} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
