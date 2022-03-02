import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form } from 'react-bootstrap';

const LoginComponent = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
                        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent;