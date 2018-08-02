// To be implemented in a future version of the site. Still in the works

import React, { Component } from 'react';
import { Button,
         Form,
         FormGroup,
         Label,
         Input } from 'reactstrap';
import axios from 'axios';

export default class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.fullname]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { fullname, company, phone, email, message } = this.state;
    console.log(e, this);
    await axios.post("/send", {
      fullname,
      company,
      phone,
      email,
      message,
    }).then(function (res) {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    const style = {
      width: "60%",
      padding: "2em",
      alignAlign: "center",
      margin: "auto",
      marginTop: "4em",
      marginBottom: "4em",
      border: "solid 1px #BF84D4",
      WebkitBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      MozBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      boxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      zIndex: "1"
    };

    const buttonStyle = {
      background: "#BF84D4",
      border: "white"
    }

    return (
      <Form style={style} onSubmit={this.handleSubmit}>
        <FormGroup>
          <h2 style={{textAlign: "center" }}>Contact Me</h2>
          <p style={{textAlign: "center",
                     fontSize: ".75em",
                     padding: "0",
                     margin: "0"}}>
            You are free to email me directly at <span style={{ color: "#BF84D4" }}>esanmartinjr@fordham.edu</span> to connect or to just tell me a good joke.
          </p>
          <p style={{textAlign: "center",
                     fontSize: ".75em",
                     marginTop: ".5em"}}>
            Scroll down to find my social media links
          </p>
        </FormGroup>
        <FormGroup>
          <Label for="fullname">Full Name</Label>
          <Input type="text"
                 name="fullname"
                 onChange={(fullname) => this.handleChange(fullname)} />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input type="text"
                 name="company"
                 onChange={(company) => this.handleChange(company)} />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text"
                 name="phone"
                 onChange={(phone) => this.handleChange(phone)} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email"
                 name="email"
                 onChange={(email) => this.handleChange(email)} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea"
                 name="message"
                 onChange={(message) => this.handleChange(message)} />
        </FormGroup>
        <Button type="submit" style={buttonStyle}>Submit</Button>
     </Form>
    );
  }
};
