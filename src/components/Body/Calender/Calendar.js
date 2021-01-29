import React from 'react';


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import Card from 'react-bootstrap/Card';
import './Calendar.css'

const calendarCard = () => (
<Card border="secondary" style={{ maxWidth: '100%' }} className="calendar">
    <Card.Header>Calendar</Card.Header>
    <Card.Body className="calendar">
      <Calendar className="calendar-date"/>
    </Card.Body>
  </Card>

);

export default calendarCard;