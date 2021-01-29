import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AcademicLinks } from './MenuItems/AcademicLinks';
import { PanduanMahasiswa } from './MenuItems/PanduanMahasiswaLists';
import { DukunganKuliah } from './MenuItems/DukunganKuliah';
import { BantuanSCeLe } from './MenuItems/BantuanSCeLe';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';


const firstMenu = AcademicLinks.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link to={item.path}>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

const secondMenu = PanduanMahasiswa.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link to={item.path}>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

const thirdMenu = DukunganKuliah.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link to={item.path}>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

const fourthMenu = BantuanSCeLe.map((item, index) => {
	return(
		<NavDropdown.Item as='li' key={index} className="dropdownItem item">
		<Link to={item.path}>
			{item.title}
		</Link>
		</NavDropdown.Item>
	);
})

const dropdownConfig = [
  {
    customkey: 1,
		content: firstMenu,
		title: "Academic Links",
		name: "dropdownOpen1",
  },
  {
    customkey: 2,
		content:secondMenu,
		title: "Panduan Mahasiswa",
		name: "dropdownOpen2",
  },
  {
    customkey: 3,
		content:thirdMenu,
		title : "Dukungan Kuliah",
		name: "dropdownOpen3",
	},
	{
    customkey: 4,
		content:fourthMenu,
		title : "Bantuan SCeLe",
		name: "dropdownOpen3",
	}
];

function NavigationBar (){
	const [status, setStatus] = useState(dropdownConfig.map(x=> false));
	const updateStatus = (value, index) => {
    const copy = [...status];
    copy[index] = value;
    setStatus(copy);
}
	



return (

	<header className="navBarContainer">
		<Navbar className="navBar" expand="lg">
			<Navbar.Brand className="home" href="#home">SCELE</Navbar.Brand>
			<Navbar.Toggle className="toggleButton" aria-controls="basic-navbar-nav" />
			<Navbar.Collapse  id="basic-navbar-nav">
				<Nav className="mr-auto navBarInner">
					{dropdownConfig.map((dropdown,index) => (
					<NavDropdown 
						{...dropdown}
						id="navDropdown" 
						key={dropdown.customkey}
						onMouseEnter={e => updateStatus(true, index)}
   					onMouseLeave={e => updateStatus(false, index)}
    				show={status[index]}
					>
					{dropdown.content}
					</NavDropdown>
					))}
				</Nav>
				<Form as='div' className="form-bar" inline>
				<div className="nav-divider-left"></div>
					<FormControl type="text" placeholder="Search Courses" className="search-bar" />
					<Button variant="outline-success">
					<i className="fa fa-search" aria-hidden="true"></i>
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	</header>
		
	);

}

export default NavigationBar;