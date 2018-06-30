import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from "axios";
import * as Yup from "yup";
import {
  Col,
  Container,
  Button,
  Form as FormStrap,
  FormGroup,
  Label,
  FormText,
  Row } from 'reactstrap';

const Forms = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  return(
    <Container>
    <FormStrap>
        <h1>Contact</h1>
        <p>Want to get some coffee or tell me a good joke?</p>
        <Row>
            <Col sm={2} md={2} xl={2}>
              <Label>Name</Label>
            </Col>
            <Col sm={10} md={10} xl={10} >
              {touched.name && errors.name && <p>{errors.name}</p>}
              <Field type="text" name="name" placeholder="Name" />
            </Col>
        </Row>
        <Row>
            <Col sm={2} md={2} xl={2}>
              <Label>Company</Label>
            </Col>
            <Col sm={10} md={10} xl={10}>
              {touched.company && errors.company && <p>{errors.company}</p>}
              <Field type="text" name="company" placeholder="Company" />
            </Col>
        </Row>
        <Row>
            <Col sm={2} md={2} xl={2}>
              <Label>Phone</Label>
            </Col>
            <Col sm={10} md={10} xl={10}>
              {touched.phone && errors.phone && <p>{errors.phone}</p>}
              <Field type="text" name="phone" placeholder="Phone" />
            </Col>
        </Row>
        <Row>
            <Col sm={2} md={2} xl={2}>
              <Label>Email</Label>
            </Col>
            <Col sm={10} md={10} xl={10} >
              {touched.email && errors.email && <p>{errors.email}</p>}
              <Field type="text" name="email" placeholder="Email" />
            </Col>
        </Row>
        <Row>
            <Col sm={2} md={2} xl={2}>
              <Label>Message</Label>
            </Col>
            <Col sm={10} md={10} xl={10} >
              {touched.message && errors.message && <p>{errors.message}</p>}
              <Field type="textarea" name="message" placeholder="Your message here" />
            </Col>
        </Row>
        <Row>
          <Button type="submit" disabled={isSubmitting}>Submit</Button>
        </Row>
  </FormStrap>
  <br />
  </Container>
  );
}

const FormikApp = withFormik({
  mapPropsToValues ({name, company, phone, email, message}) {
    return {
      name: name || "",
      company: company || "",
      phone: phone || "",
      email: email || "",
      message: message || ""
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    company: Yup.string().required('Company is required'),
    phone: Yup.string().min(4, "Phone Number must be 4 characters or longer").required('Phone Number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  }),

  async handleSubmit(e, values, { resetForm, setErrors, setSubmitting }){
    //e.preventDefault();
    //e.stopPropagation();
    //e.nativeEvent.stopImmidiatePropogation();

    const { name, company, phone, email, message} = values;

    const form = await axios.post("/send", {
      name,
      company,
      phone,
      email,
      message
    })
    resetForm();
    setSubmitting(false);
  }
})(Forms);

export default FormikApp;
