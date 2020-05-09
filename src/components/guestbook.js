import React, { useEffect, useState } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import { Grid, Cell} from 'react-mdl';
import config from './firebase-config.js'

const firebase = require('firebase')


function GuestBook() {
  const [data, setData] = useState([])
  const [messageData, setMessageData] = useState([])
  const [shouldRender, setShouldRender] = useState(true)
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const [anon, setAnon] = useState('Yes')

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }

    let ref = firebase.database().ref('data')
    //retrieve its data
    ref.orderByChild('anon').equalTo('No').on('value', snapshot => {
         const state = snapshot.val()
         setData(state)

         var currMessageData = []

         var keys = Object.keys(state)
         for(var i = 0; i<keys.length; i++){
           var currKey = keys[i];
           var currValue = state[currKey]
           currMessageData.push(currValue)
         }
         setMessageData(currMessageData)
    })
  }, [shouldRender]);

  const submitHandler = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      alert("Please go back and fill out the required fields. Thanks :)")
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault();
      Date.prototype.yyyymmdd = function() {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();

        return [
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd,
                this.getFullYear(),
              ].join('/');
      };

      var date = new Date();

      const jsonBody = {
        name: name,
        email: email,
        description: description,
        message: message,
        anon: anon,
        date: date.yyyymmdd()
      }
      firebase.database().ref('data').push().set(jsonBody)
      setValidated(true);
      alert("Form has been submitted!")
      //event.preventDefault();
      //event.stopPropagation();
    }
  };

  return (
    <div>
      <Grid container spacing={24} direction="column" id = "top">
        <Cell col={6}>
          <div className="guestbook-form-bg">
          <h1>Guestbook Form</h1>
          <hr></hr>
          <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="text"
                  required
                  minLength="6"
                  maxLength="19"
                  name = "name"
                  placeholder= "Name (required)"
                  onChange={e => setName(e.target.value)}
                />
              <Form.Control.Feedback type="invalid">Must be between 5-20 characters.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="email"
                  name = "email"
                  placeholder= "Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Control
                  type="text"
                  as="textarea"
                  rows="3"
                  maxLength="99"
                  name = "description"
                  placeholder= "Short Description"
                  onChange={e => setDescription(e.target.value)}
                />
              <Form.Control.Feedback type="invalid">Must be less than 100 characters.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Control
                  type="text"
                  as="textarea"
                  rows="6"
                  required
                  minLength="16"
                  maxLength="499"
                  name = "message"
                  placeholder= "Message to me (required)"
                  onChange={e => setMessage(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">Must be between 15-500 characters.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="selectCustom">
                <Form.Label className="guestbook-form-label">Would you like to be anonymous? *</Form.Label>
                <Form.Control as="select" required custom name = "anon" defaultValue = "Yes" onChange={e => setAnon(e.target.value)}>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button className="alumni-form-submit" type="submit">Submit form</Button>

          </Form>
          </div>
        </Cell>

        <Cell col={6} className="messages-col">
          <div className="message-body">
            {
              messageData.map((a) => {
                return(
                  <div className="message">
                    <p>{a.date}</p>
                    <h3 id="messageName">{a.name}</h3>
                    <h5 id="messageBio">{a.description}</h5>

                    <b>Message: </b> {a.message}
                  </div>
                ); })
            }
          </div>
        </Cell>

      </Grid>
    </div>
  )
}

export default GuestBook;
