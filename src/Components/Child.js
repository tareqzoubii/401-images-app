import React, { useState } from "react";
import Card from 'react-bootstrap/Card';


function Child (props){

     let [numOfLikes, setNumOfLikes ] = useState(0);

     const increaseNumOfLikes = () => {
          // increase the number on card
          setNumOfLikes(numOfLikes + 1)
          // increase the total number
          props.increaseTotal();
     }

     return (
       <Card style={{ width: "28rem" }}>
         <Card.Img variant="top" src={props.image} onClick={increaseNumOfLikes}/>
         <Card.Body>
           <Card.Title>{props.title}</Card.Title>
           <Card.Text>
             <h5>Number of Likes: {numOfLikes}</h5>
           </Card.Text>
         </Card.Body>
       </Card>
     );
}

export default Child