import React from 'react';

import './PageHeader.css';
import Logo from '../Logo/Logo';
import LogInHeader from '../LogInHeader/LogInHeader';

const pageHeader = (props) => {
    return (
        <header id = "pageHeader" className = "clearFixs">
            <div className= "containers">
                <div className="rows">
                    <Logo/>
                    <LogInHeader/>
                </div>
            </div>
            
        </header>
    );
};

export default pageHeader;