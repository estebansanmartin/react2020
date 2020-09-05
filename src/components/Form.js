import React from 'react';
import * as emailjs from 'emailjs-com';

import "rbx/index.css";
import Torino from "../images/torino.jpg"
import { Image, Column, Field, Title, Control, Input, Button, Textarea } from 'rbx';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Esteban San Martin',
      subject,
      message_html: message,
    };
    emailjs.send(
      'gmail',
      'template_LqFmqMmx',
       templateParams,
      'user_L3L8iBcxFI98ndnTe3Gmq'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, message} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Title className="title-head">contattaci</Title>
          <Image.Container>
                  <Image className="torino" src={Torino} alt="Torino" />
             </Image.Container>
        <Title subtitle className="text-contatto" as="p">Si volete richiere qualche informazione, ci invito a lasciarme un messaggio direttamente, oppure sul mio email <i className="link">info@estebansanmartin.it</i></Title>
            <Column.Group centered>
                 <Column size="three-fifths" offset="three-fifth">
        <Field>
          <Control expanded iconLeft>
            <Input
              className="input"
              required
              name="name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input
              className="input"
              required
              name="email"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Textarea
              className="input"
              required
              name="message"
              placeholder="Il vostro messaggio..."
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field kind="group">
          <Control>
            <Button className="button-form">Inviare</Button>
          </Control>
        </Field>
        </Column>
    </Column.Group>
      </form>
    );
  }
}

export default Form;