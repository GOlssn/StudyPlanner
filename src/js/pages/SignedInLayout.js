import React from 'react';
import { Link } from 'react-router';

import Menu from '../components/Menu';
import MenuAccordion from '../components/MenuAccordion';
import MenuItem from '../components/MenuItem';

export default class SignedInLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.background = 'url("../../img/background.jpg") no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
  }

  componentWillUnmount() {
    document.body.style.background = null;
    document.body.style.backgroundSize = null;
  }

  render() {
    const offsetStyle = {
      paddingLeft: '300px'
    }

    return (
      <div>
        <header>
          <Menu>
            <MenuItem linkText="Dashboard" linkHref="/dashboard"></MenuItem>
            <MenuItem linkText="Schedule" linkHref="/dashboard#"></MenuItem>
            <MenuAccordion text="Settings">
              <MenuItem linkText="Goals" linkHref="#"><i class="material-icons">done</i></MenuItem>
              <MenuItem linkText="Study Time" linkHref="#"><i class="material-icons">date_range</i></MenuItem>
              <MenuItem linkText="Account" linkHref="#"><i class="material-icons">account_circle</i></MenuItem>
            </MenuAccordion>
          </Menu>
        </header>
        <main style={offsetStyle}>
          <div class="container">
            { this.props.children }
          </div>
        </main>
        <footer style={offsetStyle}></footer>
      </div>
    );
  }
}
