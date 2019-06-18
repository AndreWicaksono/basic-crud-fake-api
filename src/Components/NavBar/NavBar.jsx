import React, {Fragment} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Fragment>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Basic CRUD</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}