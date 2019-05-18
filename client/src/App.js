import React, { Component } from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  goTo(route) {
    this.props.history.push(`/${route}`)
  }
  login() {
    this.props.auth.login(); 
  }
  logout() {
    this.props.auth.logout();
  }
  componentDidMount() {
    const { renewSession } = this.props.auth;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand href='/something' className='logo-text'>
              <Link to='/home'>BitsPlease</Link>
            </Navbar.Brand>
          </Navbar.Header>
          {isAuthenticated() && (
            <Form inline>
              <FormControl
                class='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <div class='btn btn-outline-success my-2 my-sm-0'>
                <Button
                  class='btn btn-outline-success my-2 my-sm-0'
                  type='submit'
                  onClick={this.handleClick}
                >
                  Search
                </Button>
              </div>
              {isAuthenticated() && (
                <Button
                  id='qsLogoutBtn'
                  bsStyle='primary'
                  className='btn-margin'
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </Button>
              )}
            </Form>
          )}
        </Navbar>
        <div className='container'>{this.props.children}</div>
        {!isAuthenticated() && (
          <div className='container'>
            <div className='col-12'>
              <div className='login-div'>
                <Button
                  id='qsLoginBtn'
                  bsStyle='primary'
                  className='btn-margin'
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
                <Button
                  id='qsLoginBtn'
                  bsStyle='primary'
                  className='btn-margin'
                  onClick={this.login.bind(this)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
