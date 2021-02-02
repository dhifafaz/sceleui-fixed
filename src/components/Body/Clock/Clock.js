import React,{ useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import './Clock.css';

function Clock(props) {
  const [date, setDate] = useState(new Date());

 //im just realize it replace componentDidMount and componentWillUnmount
 useEffect(() => {
  var timerID = setInterval( () => tickTock(), 1000 );

    return function clean() {
      clearInterval(timerID);
    };
 });

   function tickTock() {
    setDate(new Date());
   }

   return (
    <Card style={{ maxWidth: '100%', borderLeft : "none !important" }} >
    <Card.Header className="clock-header" >Clock</Card.Header>
    <Card.Body  style={{alignItems: 'center'}}>
        {date.toLocaleTimeString()}
    </Card.Body>
  </Card>
    );
}

export default Clock;