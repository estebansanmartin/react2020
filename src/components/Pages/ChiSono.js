import React from "react"

import "rbx/index.css"
import { Icon, Hero, Title, Container, Column, Image, Level, Heading } from "rbx"
import Mapuche from "../../images/about.png"

import Reveal from 'react-reveal/Reveal'
import "animate.css/animate.min.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCss3, faJs, faSass, faReact, faWordpress, faYarn, faNode } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function ChiSono() {
    return(
        <div>
            <Reveal effect="fadeInUp" delay={2000}>
            <Hero size="fullheight-with-navbar">
                 <Hero.Body>
                    <Container textAlign="centered">
                        <Title className="title-head">sono</Title>
                            <Column.Group>
                                <Column>
                                    <Image className="image-about" src={Mapuche} />
                                 </Column>
                                 <Column size="three-fifths">
                                    <Title className="blockquote">
                                    <Icon className="quote">
                                        <FontAwesomeIcon icon={faQuoteLeft} />
                                     </Icon>
                                        Il mio nome è <i className="link">Esteban San Martin</i>, sono un <i>Frontend</i> con residenza a Torino dal 2017. <br />Appassionato di design e delle nuove tecnologie digitali.
                                    <Icon className="icon">
                                        <FontAwesomeIcon icon={faQuoteRight} />
                                     </Icon>
                                    </Title>
                                 </Column>
                            </Column.Group>
                        <Title subtitle className="title-about" as="p">Il mio percorso proffesionale
                        </Title>
                        <Title className="text-about" as="h1" subtitle>Ho conseguito la laurea come <i className="link">Grafico Pubblicitario</i> nel 2010, specializzandomi come <i className="link">Front-end</i> con CMS,
                            ma da allora non ho mai smesso di imparare. Ho iniziato con <i className="link">HTML</i> e <i className="link">CSS</i>, che sono le fondamenta di ogni sito web, per poi proseguire con alcuni frameworks per eseguire più velocemente il lavoro. Un grande paso avanti
                            è stato imparare <i className="link">Javascript</i> che le da interazione. Per sviluppare siti web di qualità, sono fundamentali <i className="link">NPM</i> e <i className="link">Yarn</i> per i processi e Dipendenze. <i className="link">Sass</i> mi a aiutato a scrivere stili riutilizzabili, <i className="link">Bulma</i> è proppio scrito così, quindi la uso per eseguire più velocemente il lavoro. 
                            In questo momento mi trovo sperimentando con<i className="link"> ReactJS</i>, una delle librerie più importanti per lo sviluppo di applicazioni web, e <i className="link">GatsbyJS</i> che è un generatore di siti statici sviluppato con ReactJS e alimentato di <i className="link">GraphQL</i>.
                        </Title>
                        <Level className="brands" breakpoint="fullhd">
                            <Level.Item textAlign="centered">
                                <div>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faJs} />
                                    </Icon>
                                </div>
                            </Level.Item>
                            <Level.Item textAlign="centered">
                                <div>
                                <Heading>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faReact} />
                                    </Icon>
                                </Heading>
                                </div>
                            </Level.Item>
                            <Level.Item textAlign="centered">
                                <div>
                                <Heading>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faCss3} />
                                    </Icon>
                                </Heading>
                                </div>
                            </Level.Item>
                            <Level.Item textAlign="centered">
                                <div>
                                <Heading>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Icon>
                                </Heading>
                                </div>
                            </Level.Item>
                            <Level.Item textAlign="centered">
                                <div>
                                <Heading>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faSass} />
                                    </Icon>
                                </Heading>
                                </div>
                            </Level.Item>
                            <Level.Item textAlign="centered">
                                <div>
                                <Heading>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faWordpress} />
                                    </Icon>
                                </Heading>
                                </div>
                            </Level.Item>
                            <Level.Item textAlign="centered">
                                <div>
                                <Heading>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faNode} />
                                    </Icon>
                                </Heading>
                                </div>
                            </Level.Item>
                            <Level.Item textAlign="centered">
                                <div>
                                <Heading>
                                    <Icon className="icon-large">
                                        <FontAwesomeIcon icon={faYarn} />
                                    </Icon>
                                </Heading>
                                </div>
                            </Level.Item>
                        </Level>
                        <Title className="text-about" as="h2" subtitle>Ho lavorato per diverse agenzie di comunicazione in Cile, e grazie a queste collaborazioni, riesco a coprire al 100% il settore Web e Grafico.
                        </Title>
                        <Title className="text-about" as="h2" subtitle>In grafica padroneggio la suite Adobe, Photoshop e Illustrator; come Front-end domino HTML, CSS, Javascript, CMS(Joomla e Wordpress), Github, e ad un livello base ReactJS e GatsbyJS.
                        </Title>
                    </Container>
                </Hero.Body>
            </Hero>
            </Reveal>
        </div>
    )
}


export default ChiSono;