import React from "react"
import Form from "../Form"

import "rbx/index.css"
import { Hero, Container } from "rbx"

import Reveal from 'react-reveal/Reveal'
import "animate.css/animate.min.css"

function Contatto() {
    return(
        <div>
            <Reveal className="fadeInUp" delay={2000}>
            <Hero size="fullheight-with-navbar">
                 <Hero.Body>
                    <Container textAlign="centered">
                        <Form />
                    </Container>
                </Hero.Body>
            </Hero>
            </Reveal>
        </div>
    )
}


export default Contatto;