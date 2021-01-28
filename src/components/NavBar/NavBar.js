import React, {useState} from 'react';
//import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';

function NavigationBar (){
	const [show, setShow] = useState(false);
	const showDropdown = (props)=>{
		setShow(!show);
	}
	const hideDropdown = props => {
		setShow(false);
	}

	return (

	<header className="navBarContainer">
	<Navbar className="navBar" expand="lg">
	<Navbar.Brand className="home" href="#home">SCELE</Navbar.Brand>
	<Navbar.Toggle className="toggleButton" aria-controls="basic-navbar-nav" />
	<Navbar.Collapse  id="basic-navbar-nav">
		<Nav className="mr-auto navBarInner">
			<NavDropdown 
				title="Dropdown" 
				id="nav-dropdown" 
				show={show}
				onMouseEnter={showDropdown} 
				onMouseLeave={hideDropdown}
				>
			<div className="items">
				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</div>
			</NavDropdown>
		</Nav>
		<Form inline>
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button variant="outline-success">Search</Button>
		</Form>
	</Navbar.Collapse>
</Navbar>
	</header>
		
	);
	


}

export default NavigationBar;