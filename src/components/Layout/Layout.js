import React from 'react';


import Aux from '../../hoc/Aux';
import './Layout.css'
import PageHeader from '../PageHeader/PageHeader';
import NavigationBar from '../NavBar/NavBar'
import BodyOfPage from '../Body/Body';

function Layout() {
    return (
        <Aux >
            <PageHeader/>
                <NavigationBar/>
                <div style={{paddingTop: "10px"}}>
                <BodyOfPage/>
                <footer className='Content'>
                        <h1>kaki</h1>
                    </footer>
                </div>
                    
                   

        </Aux>
    );
}

export default Layout;
