import React from "react"
import "../estilos.sass"

import Recipe from "../images/Recipe-App.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faCss3, faJs, faLinkedin, faSass, faReact, faWordpress, faYarn } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import "rbx/index.css";
import { Icon, Card, Column, Image, Hero, Container, Title, Content, Media, Tag, Button } from "rbx";

const Slider = () => (
  <>
    <Hero size="fullheight-with-navbar">
        <Hero.Body>
          <Container fluid textAlign="centered">
            <Title className="title-head">portfolio</Title>
            <br />

            {/*portfolio1*/}
            <Column.Group>
                <Column size="three-quarter"offset="one-quarter">
                    <Card>
                        <Card.Image>
                            <Image.Container size="3by2">
                            <Image className="image-card" src={Recipe} />
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                        <Media>
                            <Media.Item>
                                <Title className="title-card"  as="p" size={4}>
                                Recipe APP
                                </Title>
                            </Media.Item>
                            </Media>
                            <Content>
                                <p className="text-card"> Web App sviluppata con ReactJS, e API</p> 
                                <Button.Group>
                                <Button as="a" className="primary" target="_blank" href="https://apprecipe.netlify.app/">
                                    Link
                                     <Icon className="icon">
                                        <FontAwesomeIcon icon={faLink} />
                                     </Icon>
                                </Button>
                                <Button as="a" className="primary" target="_blank" href="https://github.com/estebansanmartin/recipeapp">
                                    Github
                                     <Icon className="icon">
                                        <FontAwesomeIcon icon={faGithub} />
                                     </Icon>
                                </Button>
                                </Button.Group>
                                    <Tag.Group>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faReact} />
                                            </Icon>React JS
                                        </Tag>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faSass} />
                                            </Icon>Saas</Tag>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </Icon>Github</Tag>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faJs} />
                                            </Icon>Javascript</Tag>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faYarn} />
                                            </Icon>Yarn</Tag>
                                    </Tag.Group>
                            </Content>
                        </Card.Content>
                    </Card>
                </Column>
            </Column.Group>
                    

                </Container>

        </Hero.Body>
      </Hero>
  </>
)

export default Slider