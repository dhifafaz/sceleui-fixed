import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';
import { AcademicLinks } from './MenuItems/AcademicLinks';
import { PanduanMahasiswa } from './MenuItems/PanduanMahasiswaLists';
import { DukunganKuliah } from './MenuItems/DukunganKuliah';
import { BantuanSCeLe } from './MenuItems/BantuanSCeLe';


const firstMenu = AcademicLinks.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

const secondMenu = PanduanMahasiswa.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

const thirdMenu = DukunganKuliah.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

const fourthMenu = BantuanSCeLe.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

function NavigationBar (){
	const [show, setShow] = useState(false);

	const showDropdown = (id)=>{
		setShow(true);
	}
	const hideDropdown = (id) => {
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
				title="Academic Links" 
				id="navDropdown" 
				show={show}
				onMouseEnter={showDropdown} 
				onMouseLeave={hideDropdown}
			>
			{firstMenu}
			</NavDropdown>
			<NavDropdown 
				title="Panduan Mahasiswa" 
				id="navDropdown" 
				show={show}
				onMouseEnter={showDropdown} 
				onMouseLeave={hideDropdown}
			>
			{secondMenu}
			</NavDropdown>
			<NavDropdown 
				title="Dukungan Kuliah" 
				id="navDropdown" 
				show={show}
				onMouseEnter={showDropdown} 
				onMouseLeave={hideDropdown}
			>
			{thirdMenu}
			</NavDropdown>
			<NavDropdown 
				title="Bantuan SCeLe" 
				id="navDropdown" 
				show={show}
				onMouseEnter={showDropdown} 
				onMouseLeave={hideDropdown}
			>
			{fourthMenu}
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