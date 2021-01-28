import React from 'react';

import sceleUiLogo from '../../assets/Images/SceleUiLogo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.spanLogo}>
        <div className= {classes.logoHeader} >
            <a className={classes.logo} href="https://scele.cs.ui.ac.id">
                <img className={classes.imgResponsive} src={sceleUiLogo} alt="Scele UI X ITERA"/>
            </a>
        </div>
    </div>
);

export default logo;