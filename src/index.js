import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import { Helmet } from "react-helmet"

ReactDOM.render(
    <Router>
    <Helmet>
      <title>Esteban San Martin FrontEnd Developer Torino</title>
      <meta name="description" content="FrontEnd, Developer e Designer a Torino. Realizzazione di Siti Web di qualità, per piccole e medie imprese, professionisti e associazioni, Creazione di siti internet dinamici e accesibili." />
      <meta name="keywords" content="FrontEnd, Developer, Designer, Torino, Siti-web" />
      <meta itemprop="name" content="Esteban San Martin FrontEnd Developer Torino" />
      <meta itemprop="description" content="FrontEnd, Developer e Designer a Torino. Realizzazione di Siti Web di qualità, per piccole e medie imprese, professionisti e associazioni, Creazione di siti internet dinamici e accesibili." />
      <meta itemprop="image" content="./images/mapuche.png" />
      <meta property="og:url" content="https://www.estebansanmartin.it" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Esteban San Martin FrontEnd Developer Torino" />
      <meta property="og:description" content="FrontEnd, Developer e Designer a Torino. Realizzazione di Siti Web di qualità, per piccole e medie imprese, professionisti e associazioni, Creazione di siti internet dinamici e accesibili." />
      <meta property="og:image" content="./images/mapuche.png"></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Esteban San Martin FrontEnd Developer Torino" />
      <meta name="twitter:description" content="FrontEnd, Developer e Designer a Torino. Realizzazione di Siti Web di qualità, per piccole e medie imprese, professionisti e associazioni, Creazione di siti internet dinamici e accesibili." />
      <meta name="twitter:image" content="./images/mapuche.png"></meta>
    </Helmet>
      <App />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
