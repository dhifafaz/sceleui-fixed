import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarCard from './Calender/Calendar';
import Announcements from './Announcement/Announcement';

function BodyOfPage() {

return (
    <Container className="body" style={{maxWidth : "90%"}}>
    <Row className="justify-content-md-center" >
      
      <Col  xl={3 | {order : 1}}lg={{order : 1}} md={12|{order : 1}} sm={12|{order : 1}}  xs={{order : 2}}>
        Clock
        <CalendarCard/>
      </Col>
      <Col xl={6 | {order : 2}}lg={{order : 2}} md={12|{order : 2}} sm={12|{order : 2}} xs={{order : 1}}>
        <Announcements/>
      </Col>    
      <Col  xl={3 | {order : 3}}lg={{order : 3}} md ={12|{order : 3}} sm={12|{order : 3}} xs={{order : 3}}>
        Right side bar
      </Col>

    </Row>
  </Container>
); 

}

export default BodyOfPage;