import React from 'react';


import Aux from '../../hoc/Aux';
import './Layout.css'
import PageHeader from '../PageHeader/PageHeader';
import NavigationBar from '../NavBar/NavBar'

function Layout() {
    return (
        <Aux >
            <PageHeader/>
                <NavigationBar/>
                <main className='Content'>
                    <div>
                        <h2>Body</h2>
                    </div>
                    <footer>
                        <h2>End of page</h2>
                    </footer>
                </main>
        </Aux>
    );
}

export default Layout;
