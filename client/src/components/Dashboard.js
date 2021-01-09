import React, { useEffect, useState} from 'react';
import { hasSigned} from "../components/auth-api";
import {Col,Row,Container,Card,Button} from "react-bootstrap";
import ProfileNav from "./profile/profileNav";
import "./css/dashboard.css";

export default function Dashboard() {

  const [username,setUsername] =useState("");

  const Username = async() =>{
    const result = await hasSigned({username});
      const thedata = result.data.username;
      setUsername(thedata);
      console.log(result)        
}

  useEffect(()=>{
    Username()
  })

  return (
    <div>
      <ProfileNav/>
        <Container>
          <Row>
            <Col lg={5}>
              <div className="profile-box">
                <Card style={{ width: '18rem',height:"fit-content" }}>
                  <Card.Img className="profile-foto" variant="top" src="https://bootdey.com/img/Content/avatar/avatar7.png" />
                  <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={7} >
              <div className="profile-box"></div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}