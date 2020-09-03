import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import FormModal from './FormModal';

const SiteNav = (props) => {

  return (
    <Navbar bg="dark" variant="dark" sticky='top'>
      <Navbar.Brand href="#home">Stars University</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Pets by Type</Nav.Link>
        <Nav.Link href="#">Pets By Locatin</Nav.Link>
      </Nav>
      <FormModal type ='create'/>
      <Form inline>
        <FormControl type="text" placeholder="Search our Students" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default SiteNav;


