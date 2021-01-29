import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarCard from './Calender/Calendar';
import Announcements from './Announcement/Announcement';

function BodyOfPage() {

return (
    <Container className="body" style={{maxWidth : "90%"}}>
    <Row className="justify-content-md-center">
      
      <Row lg={2} sm={1}style={{maxWidth:"75%", margin:0}} className="justify-content-sm-center">
      <Col style={{maxWidth : "31.69%"}} xl={ {order : 1}}lg={{order : 1}} md={{order : 1}} sm={2|{order : 1}}  xs={{order : 2}}>
        Clock
        <CalendarCard/>
      </Col>
      <Col style={{maxWidth : "66%"}}xl={  {order : 2}}lg={{order : 2}} md={{order : 2}} sm={10|{order : 2}} xs={{order : 1}}>
        <Announcements/>
      </Col>
      </Row>   
      <Col  xl={3 | {order : 3}}lg={{order : 3}} md ={{order : 3}} sm={{order : 3}} xs={{order : 3}}>
        many more
      </Col>

    </Row>
  </Container>
); 

}

export default BodyOfPage;