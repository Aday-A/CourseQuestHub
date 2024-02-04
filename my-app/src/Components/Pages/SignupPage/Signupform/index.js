import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom";
import axios from "axios";


export function Signupform () {

      const [firstName, setFirstName] = useState()
      const [lastName, setLastName] = useState()
      const [phone, setPhone] = useState()
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()

      // const handleSubmitRegister = (e) => {
      //   e.preventDefault()
      //   axios.post("https://course-quest-hub.onrender.com/api/cqh/registration/",{firstName,lastName,phone,email,password})
      //   .then(result => console.log(result))
      //   .catch(err => console.log(err))
      // }

      // const [loginData, setLoginData] = useState({ username: "", password: "" });
      // const [registerData, setRegisterData] = useState({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   password: "",
      // });

      const handleRegister = async () => {
        try {
          const response = await axios.post(
            "https://course-quest-hub.onrender.com/api/cqh/registration/",
            {firstName,lastName,phone,email,password}
          );
          console.log(response.data); // Handle success response
        } catch (error) {
          console.error("Registration failed", error.response.data); // Handle error response
        }
      };

      // const handleLogin = async () => {
      //   try {
      //     const response = await axios.post(
      //       "https://course-quest-hub.onrender.com/api/cqh/login/",
      //       loginData
      //     );
      //     console.log(response.data); // Handle success response
      //   } catch (error) {
      //     console.error("Login failed", error.response.data); // Handle error response
      //   }
      // };



    return (
        <Container fluid className="w-75 py-3">
        
        <div className="text-center py-3">
          <h2>Welcome To CourseQuestHub</h2>
          Enter your details to create your account
        </div>
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to CourseQuestHub User Agreement and Privacy Policy" />
            </Form.Group>
            
          <div className="d-grid gap-2" >
              <Button variant="primary" type="" size="lg"> Sign Up </Button>
          </div>
          
        </Form>
  
        <div className="fst-italic text-center mx-auto">
          Already have an account? <Link to="/LoginPage">Login</Link>
        </div>
      </Container>
    );
};