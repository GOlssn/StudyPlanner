import React from 'react';

export default class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = { labelActive: false };
  }

  onFocus() {
    this.setState({
      labelActive: true
    });
  }

  onBlur(e) {
    if(e.target.value === "") {
      this.setState({
        labelActive: false
      });
    }
  }

  render() {

    const { id } = this.props;
    const { name } = this.props;
    const { type } = this.props;
    const { labelText } = this.props;

    return (
      <div class="input-field">
        <input class="grey-text" id={id} name={name} type={type} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} />
        <label for={id} class={this.state.labelActive ? "active" : ""}>{labelText}</label>
      </div>
    );
  }
}
