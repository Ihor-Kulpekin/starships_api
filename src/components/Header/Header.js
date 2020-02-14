import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {getStarships} from "../../actions/actions";

const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const fetchStarships = () => {
    dispatch(getStarships(search));
  };

  const changeSearch = (event) => {
    setSearch(event.target.value)
  };

  useEffect(fetchStarships, []);

  return (<Navbar bg="primary" variant="light" expand="lg">
      <Navbar.Brand>Starships List</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to='/list'>
            STARSHIPS LIST
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl value={search} onChange={changeSearch} type="text" placeholder="Search..."
                       className="mr-sm-2 btn-outline-light"/>
          <Button onClick={fetchStarships} variant="light" className="btn-light">
            <NavLink to={'/list/'+search}>
              Search
            </NavLink>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;