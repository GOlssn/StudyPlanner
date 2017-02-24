import React from 'react';

import MenuAccordion from './MenuAccordion';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    }
  }

  setActive(activeIndex) {
    this.setState({activeIndex});
  }

  renderChildren(props) {
    let self = this;
    return React.Children.map(props.children, (child, index) => {
      if(child.type === MenuAccordion) {
        return React.cloneElement(child, {index: index, setActive: self.setActive.bind(self), active: index === self.state.activeIndex});
      } else {
        return React.cloneElement(child, {index: index, setActive: self.setActive.bind(self), active: index === self.state.activeIndex});
      }
    });
  }

  render() {

    return (
      <ul class="menu">
        <div class="list-header">
          <div class="logo">
            <img src="../../img/logo-teal.png" />
          </div>
          <span class="title">Stdy Planner</span>
        </div>
        {this.renderChildren(this.props)}
      </ul>
    );
  }
}
