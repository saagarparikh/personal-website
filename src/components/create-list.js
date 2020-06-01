import React, { useEffect, useState } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import { Grid, Cell} from 'react-mdl';
import config from './firebase-config.js'

const firebase = require('firebase')


function CreateList() {
  const [list, setList] = useState('')
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  });


  const submitHandler = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault();
      const jsonBody = {
        list: list
      }
      firebase.database().ref('movie-lists').child(list).set(jsonBody)
      setValidated(true);
      alert("New List Added!")
    }
  };

  return (
    <div>
      <Grid container spacing={24} direction="column" id = "top">
        <Cell col={12}>
          <div className="guestbook-form-bg">
          <h1>Add New list</h1>
          <hr></hr>
          <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Control
                  type="text"
                  as="textarea"
                  rows="3"
                  required
                  name = "list"
                  placeholder= "Enter List Name"
                  onChange={e => setList(e.target.value)}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button className="alumni-form-submit" type="submit">Add list</Button>
          </Form>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}

export default CreateList;
