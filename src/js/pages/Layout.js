import React from 'react';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default class Layout extends React.Component {
  componentWillMount() {
    document.body.style.background = 'url("../../img/background.jpg") no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
  }

  componentWillUnmount() {
    document.body.style.background = null;
    document.body.style.backgroundSize = null;
  }

  render() {
    return (
      <div>
        <header></header>
        <main>
          <div class="container">
            { this.props.children }
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}
