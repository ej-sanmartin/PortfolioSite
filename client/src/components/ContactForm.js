import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";


export default class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      fullname: "",
      company: "",
      phone: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  async handleSubmit(e){
    e.preventDefault();

    const { fullname, company, phone, email, message } = this.state;
    await axios.post("/send", {
      fullname: fullname,
      company: company,
      phone: phone,
      email: email,
      message: message,
    }).then(function(res){
        console.log(res);
        console.log(res.data);
      })
      .catch(function(err){
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
      marginBottom: "5.5em",
      border: "solid 1px #BF84D4",
      WebkitBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      MozBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      boxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      zIndex: "1"
    };

    return (
      <Form style={style} onSubmit={this.handleSubmit}>
        <FormGroup>
          <h2 style={{textAlign: "center"}}>Contact Me</h2>
        </FormGroup>
        <FormGroup>
          <Label for="fullname">Full name</Label>
          <Input type="text"
                 name="fullname"
                 onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input type="text"
                 name="company"
                 onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text"
                 name="phone"
                 onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email"
                 name="email"
                 onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea"
                 name="message"
                 onChange={this.handleChange} />
        </FormGroup>
        <Button>Submit</Button>
     </Form>
    );
  }
};
