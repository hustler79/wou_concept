'use strict';

import React from 'react';
import { autobind } from 'core-decorators';

export default class NodeComponent extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    propagateData: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      titleValue: 'Example title',
      textValue: 'Type your text',
    };
  }

  @autobind
  handleTitleChange(event) {
    this.setState({
      titleValue: event.target.innerText,
    });
    this.props.propagateData({
      id: this.props.id,
      title: event.target.innerText,
      value: this.state.textValue,
    });
  }

  @autobind
  handleTextChange(event) {
    this.setState({
      textValue: event.target.innerText,
    });
    this.props.propagateData({
      id: this.props.id,
      title: this.state.titleValue,
      value: event.target.innerText,
    });
  }

  @autobind
  addField() {
    this.setState({
      textValue: this.state.textValue.concat(' %FIELD% '),
    });
    this.props.propagateData({
      id: this.props.id,
      title: this.state.titleValue,
      value: this.state.textValue.concat(' %FIELD% '),
    });
  }

  render() {
    return (
      <li>
        <h4 contentEditable="true" onInput={this.handleTitleChange}>{this.state.titleValue}</h4>
        <p className="paragraf-input" contentEditable="true" onInput={this.handleTextChange}>
          {this.state.textValue}
        </p>
        <button
          type="button"
          className="btn btn-default btn-xs"
          onClick={this.addField}
        >
          Add editable field
        </button>
      </li>
    );
  }

}
