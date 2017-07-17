import React, {Component} from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {disable: false}
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.disable) {
      return null
    } else {
      this.props.onClick();
      this.setState({disable: true});      
    }
  }

  render() {
    var disabled = this.state.disabled ? 'disabled' : ''
    return (
      <button
        disabled={disabled}
        className="square"
        onClick={this.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
