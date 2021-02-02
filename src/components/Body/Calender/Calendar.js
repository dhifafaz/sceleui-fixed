import React from 'react';


import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import './Calendar.css';

const calendarCard = () => (
<Card style={{ maxWidth: '100%', borderLeft : "none !important" }} className="calendar">
    <Card.Header >Calendar</Card.Header>
    <Card.Body className="calendartext-center p-3" style={{alignItems: 'center'}}>
      <Calendar style={{ Width: '100%', padding: "0 0 0 0 !important"}} className="calendar-date"/>
    </Card.Body>
  </Card>

);

export default calendarCard;