import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {makeStyles} from '@material-ui/core/styles';

import {getStarships} from '../../actions/actions';

const useStyles = makeStyles(() => ({
  button: {
    color: '#222',
    textDecoration: 'none',
    "&:hover": {
      color: '#222',
      textDecoration: 'none',
    }
  },
  navLink: {
    color: 'rgba(255,255,255,0.49)',
    textDecoration: 'none',
    "&:hover": {
      color: 'rgba(255,255,255,0.75)',
      textDecoration: 'none',
    }
  }
}));

const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const styles = useStyles();

  const fetchStarships = () => {
    dispatch(getStarships(search));
    setSearch('');
  };

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(fetchStarships, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        Starships List
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className='nav-link'>
            <NavLink to="/" className={styles.navLink}>HOME</NavLink>
          </Nav.Link>
          <Nav.Link className="nav-link" href="/list">
            <NavLink to="/list" className={styles.navLink}>STARSHIPS</NavLink>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl value={search} onChange={changeSearch} type="text" placeholder="Search..."
                       className="mr-sm-2 btn-outline-light"/>
          <Button onClick={fetchStarships} variant="light" className="btn-outline-light">
            <NavLink to={"/list/" + search} className={styles.button}>
              Search
            </NavLink>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;