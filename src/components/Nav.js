import React from "react"
import { NavLink } from "react-router-dom"

import "rbx/index.css";
import { Navbar, Field, Control, Button, Icon, Image } from "rbx";

import Logo from "../images/icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Nav = () => {
    return(
        <div>
<Navbar transparent>
  <Navbar.Brand>
    <Navbar.Item href="https://estebansanmartin.it">
      <Image
        src={Logo}
        alt="Esteban San Martin"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Segment className="text-menu" align="start">
        <ul className="ul">
          <li className="li"><NavLink to="/">Home</NavLink></li>
          <li className="li"><NavLink to="/ChiSono">Chi Sono</NavLink></li>
          <li className="li"><NavLink to="/Portfolio">Portfolio</NavLink></li>
          <li className="li"><NavLink to="/Contatto">Contatto</NavLink></li>
        </ul>  
    </Navbar.Segment>
    <Navbar.Segment align="end">
      <Navbar.Item as="div">
        <Field kind="group">
          <Control>
            <Button as="a" outlined color="info"  target="_blank" href="https://twitter.com/resourcesantips">
              <Icon>
                <FontAwesomeIcon icon={faTwitter} />
              </Icon>
            </Button>
          </Control>
          <Control>
            <Button as="a" outlined color="primary" target="_blank" href="https://github.com/estebansanmartin">
              <Icon>
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
            </Button>
          </Control>
        </Field>
      </Navbar.Item>
    </Navbar.Segment>
  </Navbar.Menu>
</Navbar>

        </div>
    )
};

export default Nav;