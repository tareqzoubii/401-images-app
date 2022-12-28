import React, { useState } from "react";
import Child from "./Child";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Parent () {
     let [totalNumOfLikes, setTotalNumberOfLikes] = useState(0)

     const increaseTotalNumber = () => {
          setTotalNumberOfLikes(totalNumOfLikes + 1)
     }
     
     return (
       <>
       <Navbar bg="primary" variant="dark">
           <Container>
             <Nav className="me-auto">
               <Nav.Link href="/" style={{marginLeft:"600px"}}>Home</Nav.Link>
             </Nav>
           </Container>
         </Navbar>
         <h3 style={{border: "3px solid", borderRadius: "10px ",marginLeft:"600px", marginTop:"50px",marginRight:"567px"}}> Total Number of Likes : {totalNumOfLikes}</h3>
         <Row xs={2} md={2} style={{marginLeft: "60px", marginTop:"100px"}}>
           <Child
             title="nature1"
             image="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"
             increaseTotal={increaseTotalNumber}
           />

           <Child
             title="nature2"
             image="https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg"
             increaseTotal={increaseTotalNumber}
           />

           <Child
             title="nature3"
             image="https://wallpapercave.com/wp/u9AVLry.jpg"
             increaseTotal={increaseTotalNumber}
           />
         </Row>
       </>
     );
}

export default Parent