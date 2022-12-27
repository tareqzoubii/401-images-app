import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Parent from "./Parent";

function Home(){
     return (
       <>
         <Navbar bg="primary" variant="dark">
           <Container>
             <Nav className="me-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href='/parent'>Vote Page</Nav.Link>
             </Nav>
           </Container>
         </Navbar>

         <h2>Welcome To voting Page</h2>
         <h3> From the nav bar click on Vote Page to vote for the nature picture you want or from the link choose "/parent"</h3>
       </>
     );
}

export default Home