import React, { useState, useEffect } from "react"
import { Form, Button, Col, Row, Modal } from 'react-bootstrap'
import "../Styles/newInfoStyle.css"

const Login = ({ setUsername, setPassword, handeLogin, handleSignUp }) => {

  const [signUp, setSignUp] = useState(false);

  if (signUp) {
    return (
      <>
        <div className="shadowBackground3">
          <Form.Group as={Row} >
            <Form.Label column sm="4">
              Username:
                </Form.Label>
            <Col sm="8">
              <Form.Control type="text" onChange={({ target }) => setUsername(target.value)} placeholder="username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm="4">
              Password:
                </Form.Label>
            <Col sm="8">
              <Form.Control type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
            </Col>
          </Form.Group>
          <Button className="primary" onClick={handleSignUp}>Sign Up</Button>
        </div>
        <div className="text--center mt-4">
          <p>Back to <a className="badge badge-primary text-white signup" onClick={() => setSignUp(false)}>Login</a></p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="shadowBackground3">

          <Form.Group as={Row} >
            <Form.Label column sm="4">
              Username:
                </Form.Label>
            <Col sm="8">
              <Form.Control type="text" onChange={({ target }) => setUsername(target.value)} placeholder="username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm="4">
              Password:
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
            </Col>
          </Form.Group>
          <Button className="primary" onClick={handeLogin}>Log in</Button>
        </div>
        <div className="text--center mt-4">
          <p>Don't have an account? <a className="badge badge-primary text-white signup" onClick={() => setSignUp(true)}>Sign Up here.</a></p>
        </div>
      </>
    )
  }

}

export default Login