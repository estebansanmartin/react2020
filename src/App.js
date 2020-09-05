import React from 'react';
//import Logo from "./images/giphy.webp";
import Cursor from "./components/Cursor"
import "rbx/index.css";
import {  Hero, Title, Content } from "rbx";
import './estilos.sass';
import Nav from "./components/Nav"
import { Switch, Route } from "react-router-dom"
import { spring, AnimatedSwitch } from 'react-router-transition';

import Home from "./components/Pages/Home"
import ChiSono from "./components/Pages/ChiSono"
import Portfolio from "./components/Pages/Portfolio"
import Contatto from "./components/Pages/Contatto"
import NotFound from "./components/Pages/404"
//ANALYTICS
import ReactGA from "react-ga"
import { createBrowserHistory } from "history"
//STYLES TRANSITION
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 32,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.1,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.9),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

//React-Router-Dom

export const App = () => {
  //analytics
  const history = createBrowserHistory();
  history.listen(location => {
    ReactGA.initialize('UA-176859099-1');
    ReactGA.set({ page: location.pathname});
    ReactGA.pageview(location.pathname);
  })
  return (
    <div>
      <Cursor />
      <Hero size="fullheight">
        <Hero.Head>
           <Nav />
           <Switch history={history}>
              <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="route-wrapper"
                > 
                    <Route exact path="/" component={Home} />
                    <Route path="/chisono" component={ChiSono} exact />
                    <Route path="/portfolio" component={Portfolio} exact />
                    <Route path="/contatto" component={Contatto} exact />
                    <Route path="*" component={NotFound} exact />
                </AnimatedSwitch>
            </Switch>
        </Hero.Head>
        <Hero.Foot>
          <Title as="p" subtitle className="text-footer">Copyright <Content as="span" className="copyright">&copy;</Content> ES {new Date().getFullYear()} </Title>
        </Hero.Foot>
      </Hero>
    </div>
  );
}

export default App;
