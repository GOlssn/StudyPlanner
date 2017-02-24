import React from 'react';

export default class MenuAccordion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdownStyle: {maxHeight: 0},
      isDroppedDown: false
    }
  }

  onClick(event) {
    const list = event.target.nextSibling;
    if(!this.props.active && !this.state.isDroppedDown)
      this.props.setActive(this.props.index);
    else
      this.props.setActive(null);

    this.toggleDropdown(list);
  }

  toggleDropdown(list) {
    if(this.state.isDroppedDown) {
      this.setState({
        dropdownStyle: {
          maxHeight: 0
        },
        isDroppedDown: !this.state.isDroppedDown
      });
    } else {
      this.setState({
        dropdownStyle: {
          maxHeight: list.scrollHeight + 'px'
        },
        isDroppedDown: !this.state.isDroppedDown
      });
    }
  }

  render() {

    const activeClass = this.props.active ? 'active' : '';

    return(
      <li class="accordion-header" onClick={this.onClick.bind(this)}><a class={activeClass} href="#">{this.props.text}<span></span></a>
        <ul class="accordion" style={this.state.dropdownStyle}>
          {this.props.children}
        </ul>
      </li>
    );
  }
}
