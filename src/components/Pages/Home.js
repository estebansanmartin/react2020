import React from "react"
import Logo from "../../images/giphy.webp";

import Reveal from "react-reveal/Reveal"
import "animate.css/animate.min.css"

import "rbx/index.css";
import { Hero, Container, Image } from "rbx"
import '../../estilos.sass';



function Home() {
    return(
        <div>
        <Reveal className="fadeInUp" delay={2000}>
        <Hero.Body>
          <Container textAlign="centered">
            <Image className="mask" src={Logo}></Image>
            <h1 className="title-home">Front</h1>
            <h1 className="title-home">End</h1>
          </Container>
        </Hero.Body>
        </Reveal>
        </div>
    )
};

export default Home;