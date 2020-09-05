import React from "react"
import "../../estilos.sass"

import Edile from "../../images/constructora.png"
import Recipe from "../../images/Recipe-App.png"
import Restaurant from "../../images/restaurant1.png"
import Reactivo from "../../images/react.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faBootstrap, faAdobe, faGithub, faCss3, faJs, faSass, faReact, faWordpress, faYarn } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import "rbx/index.css";
import { Icon, Card, Column, Image, Hero, Container, Title, Content, Media, Tag, Button } from "rbx";

const Portfolio = () => (
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
                            <Image src={Recipe} />
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
                                <Button as="a" className="button-card" target="_blank" href="https://apprecipe.netlify.app/">
                                    Link
                                     <Icon className="icon">
                                        <FontAwesomeIcon icon={faLink} />
                                     </Icon>
                                </Button>
                                <Button as="a" className="button-card" target="_blank" href="https://github.com/estebansanmartin/recipeapp">
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
                                                <FontAwesomeIcon icon={faAdobe} />
                                            </Icon>Graphic Design</Tag>
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

            {/*portfolio2*/}
            <Column.Group>
                <Column size="three-quarter"offset="one-quarter">
                    <Card>
                        <Card.Image>
                            <Image.Container size="3by2">
                            <Image src={Edile} />
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                        <Media>
                            <Media.Item>
                                <Title className="title-card"  as="p" size={4}>
                                Constructora GM
                                </Title>
                            </Media.Item>
                            </Media>
                            <Content>
                                <p className="text-card"> Sito web sviluppato con Wordpress, para una impresa edile e ho anche ideato un brand.</p> 
                                <Button.Group>
                                <Button as="a" className="button-card" target="_blank" href="https://constructoragreenmartins.cl/">
                                    Link
                                     <Icon className="icon">
                                        <FontAwesomeIcon icon={faLink} />
                                     </Icon>
                                </Button>
                                </Button.Group>
                                    <Tag.Group>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faWordpress} />
                                            </Icon>Wordpress
                                        </Tag>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faCss3} />
                                            </Icon>CSS</Tag>
                                            <Tag rounded>
                                        <Icon className="icon">
                                                <FontAwesomeIcon icon={faAdobe} />
                                            </Icon>Brand Identity</Tag>
                                    </Tag.Group>
                            </Content>
                        </Card.Content>
                    </Card>
                </Column>
            </Column.Group>

            {/*portfolio3*/}
            <Column.Group>
                <Column size="three-quarter"offset="one-quarter">
                    <Card>
                        <Card.Image>
                            <Image.Container size="3by2">
                            <Image src={Restaurant} />
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                        <Media>
                            <Media.Item>
                                <Title className="title-card"  as="p" size={4}>
                                Restaurant
                                </Title>
                            </Media.Item>
                            </Media>
                            <Content>
                                <p className="text-card"> Sito web sviluppato con HTML, ideato per un restaurant. Mi sono occupato anche di fare un brand.</p> 
                                <Button.Group>
                                <Button as="a" className="button-card" target="_blank" href="https://www.estebansanmartin.it/restaurant/">
                                    Link
                                     <Icon className="icon">
                                        <FontAwesomeIcon icon={faLink} />
                                     </Icon>
                                </Button>
                                </Button.Group>
                                    <Tag.Group>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faBootstrap} />
                                            </Icon>Bootstrap
                                        </Tag>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faCss3} />
                                            </Icon>CSS</Tag>
                                        <Tag rounded>
                                            <Icon className="icon">
                                                <FontAwesomeIcon icon={faHtml5} />
                                            </Icon>HTML</Tag>
                                            <Tag rounded>
                                        <Icon className="icon">
                                                <FontAwesomeIcon icon={faAdobe} />
                                            </Icon>Brand Identity</Tag>
                                    </Tag.Group>
                            </Content>
                        </Card.Content>
                    </Card>
                </Column>
            </Column.Group>

            {/*portfolio4*/}
            <Column.Group>
                <Column size="three-quarter"offset="one-quarter">
                    <Card>
                        <Card.Image>
                            <Image.Container size="3by2">
                            <Image src={Reactivo} />
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                        <Media>
                            <Media.Item>
                                <Title className="title-card"  as="p" size={4}>
                                React Portfolio
                                </Title>
                            </Media.Item>
                            </Media>
                            <Content>
                                <p className="text-card"> Primo portfolio sviluppato con ReactJS, e con alcune librerie Javascript.</p> 
                                <Button.Group>
                                <Button as="a" className="button-card" target="_blank" href="https://webdigital.netlify.app/">
                                    Link
                                     <Icon className="icon">
                                        <FontAwesomeIcon icon={faLink} />
                                     </Icon>
                                </Button>
                                <Button as="a" className="button-card" target="_blank" href="https://github.com/estebansanmartin/es">
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
                                                <FontAwesomeIcon icon={faCss3} />
                                            </Icon>CSS</Tag>
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
                                                <FontAwesomeIcon icon={faAdobe} />
                                            </Icon>Graphic Design</Tag>
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

export default Portfolio

/*<body class="demo-1">
	<main>
		<nav class="menu">
			<div class="menu__item">
				<Generic as="a" href="https://constructoragreenmartins.cl/" target="_blank" class="menu__item-link" rel="noopener noreferrer">Constructora</Generic>
				<img class="menu__item-img" src={Edile} alt="Impresa Edile" />
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Constructora</span>
						<span>Constructora</span>
						<span>Constructora</span>
						<span>Constructora</span>
					</div>
				</div>
			</div>
			<div class="menu__item">
				<a href="https://assistenzatorino.netsons.org/" target="_blank" class="menu__item-link" rel="noopener noreferrer">Assistenza</a>
				<img class="menu__item-img" src={Assistenza} alt="Assistenza Sanitaria" />
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Assistenza</span>
						<span>Assistenza</span>
						<span>Assistenza</span>
						<span>Assistenza</span>
					</div>
				</div>
			</div>
			<div class="menu__item">
				<a href="http://estebansanmartin.net/es/restaurant/" target="_blank" class="menu__item-link" rel="noopener noreferrer">Restaurant</a>
				<img class="menu__item-img" src={Restaurant} alt="Restaurant" />
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Restaurant</span>
						<span>Restaurant</span>
						<span>Restaurant</span>
						<span>Restaurant</span>
					</div>
				</div>
			</div>
			<div class="menu__item">
				<a href="https://apprecipe.netlify.com" target="_blank" class="menu__item-link" rel="noopener noreferrer">Recipe APP</a>
				<img class="menu__item-img" src={Recipe} alt="Ditta Edile" />
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Recipe APP</span>
						<span>Recipe APP</span>
						<span>Recipe APP</span>
						<span>Recipe APP</span>
					</div>
				</div>
			</div>
			<div class="menu__item">
				<a href="http://estebansanmartin.net/" target="_blank" class="menu__item-link" rel="noopener noreferrer">ReactJS</a>
				<img class="menu__item-img" src={Reactivo} alt="Portfolio Personale" />
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>ReactJS</span>
						<span>ReactJS</span>
						<span>ReactJS</span>
						<span>ReactJS</span>
					</div>
				</div>
			</div>
		</nav>
	</main>
</body> */ 