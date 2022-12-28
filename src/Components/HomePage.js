import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Parent from "./Parent";

function Home(){
     return (
       <>
         <Navbar bg="primary" variant="dark">
           <Container>
             <Nav className="me-auto">
               <Nav.Link href="/" style={{marginLeft:"550px"}}>Home</Nav.Link>
               <Nav.Link href='/parent'>Vote Page</Nav.Link>
             </Nav>
           </Container>
         </Navbar>

         <h2 style={{border: "3px solid", borderRadius: "10px ",marginLeft:"550px", marginTop:"30px", marginRight:"600px"}}>Welcome To voting Page</h2>
         <Button href="/parent" variant="primary" size="lg" style={{marginLeft:"650px", marginTop:"100px"}}>
          Vote Page
        </Button>
         </>
     );
}

export default Home