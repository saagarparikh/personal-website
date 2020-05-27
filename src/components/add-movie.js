import React, { useEffect, useState } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import { Grid, Cell} from 'react-mdl';
import config from './firebase-config.js'

const firebase = require('firebase')


function AddMovie() {
  const [movie, setMovie] = useState('')
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
        movie: movie
      }
      firebase.database().ref('all-movies').push().set(jsonBody)
      setValidated(true);
      alert("Form has been submitted!")
    }
  };

  return (
    <div>
      <Grid container spacing={24} direction="column" id = "top">
        <Cell col={12}>
          <div className="guestbook-form-bg">
          <h1>Add New Movie</h1>
          <hr></hr>
          <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Control
                  type="text"
                  as="textarea"
                  rows="3"
                  required
                  name = "movie"
                  placeholder= "Enter Movie IMDBid"
                  onChange={e => setMovie(e.target.value)}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button className="alumni-form-submit" type="submit">Add Movie</Button>
          </Form>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}

export default AddMovie;
