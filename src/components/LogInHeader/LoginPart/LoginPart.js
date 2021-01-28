import React from 'react';

import classes from './LoginPart.module.css';
import InputLogIn from '../../InputLogIn/InputLogIn';

const loginPart = (props) => (
    <div className={classes.loginPart}>
        <InputLogIn/>
    </div>
);

export default loginPart;