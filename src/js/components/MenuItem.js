import React from 'react';

import { Link } from 'react-router';

export default class MenuItem extends React.Component {
  onClick() {
    this.props.setActive(this.props.index);
  }

  render() {
    const activeClass = this.props.active ? 'active' : '';

    return(
      <li onClick={this.onClick.bind(this)}>
        <Link class={activeClass} to={this.props.linkHref}>{this.props.children}{this.props.linkText}</Link>
      </li>
    );
  }
}
