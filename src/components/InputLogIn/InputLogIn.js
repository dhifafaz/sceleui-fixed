import React from 'react';

import './InputLogIn.css';

const inputLogin = (props) => (
    <form className="pullRightBox inputBox">
        <div id="loginSection">
            <label id="user">
                <i className="fa fa-user"></i>
            </label>
            <input id= "inputName" name= "username" placeholder="Username" type="text"  autoComplete="username"></input>
            <label id="pass">
                <i className="fa fa-key"></i>
            </label>
            <input id="inputPassword"name= "password" placeholder="Password" type="password"  autoComplete="current-password"></input>
            <input className="labelEnter" type="submit" name="submit" value/>
        </div>
    </form>
    

);

export default inputLogin;