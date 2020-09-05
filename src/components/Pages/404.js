import React from "react"

import "rbx/index.css"
import { Hero, Title, Container } from "rbx"

function notFound() {
return(
    <div>
        <Hero>
            <Hero.Body>
                <Container textAlign="centered">
                    <Title className="errorTitle">ERROR 404</Title>
                    <Title className="errorSubtitle link" as="h2" subtitle>questa pagina non esiste</Title>
                </Container>
            </Hero.Body>
        </Hero>
    </div>
 )
};

export default notFound;