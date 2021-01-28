import React from 'react';

import './LogInHeader.css';
import LoginPart from './LoginPart/LoginPart';

const logInHeader = (props) => (
    <div className="loginHeader spanLoginHeader">
        <LoginPart/>
    </div>
);

export default logInHeader;