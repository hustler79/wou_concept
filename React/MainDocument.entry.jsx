'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { autobind } from 'core-decorators';
import NodeComponent from 'woumedia/Components/NodeComponent';
import forEach from 'lodash/forEach';

class MainDocument extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      templateName: 'test_template',
      sections: [],
      listElements: [],
      listSize: 0,
      JsonValue: '',
    };
  }

  componentDidMount() {
  }

  @autobind
  getJson() {
    this.setState({
      JsonValue: JSON.stringify(
        {
          template: this.state.templateName,
          items: this.state.sections,
        }
      ),
    });
  }

  @autobind
  setSections(section) {
    const latest = this.state.sections;

    forEach(latest, (value, key) => {
      if (key === section.id) {
        latest[key] = section;
      }
    });

    this.setState({
      sections: latest,
    });
  }

  @autobind
  addNode() {
    const newObj = {};

    this.setState({
      listElements: this.state.listElements.concat(
        <NodeComponent
          id={this.state.listSize}
          propagateData={this.setSections}
        />
      ),
      sections: this.state.sections.concat(newObj[this.state.listSize] = {}),
      listSize: this.state.listSize + 1,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h2>Simple Document</h2>
              <button
                type="button"
                className="btn btn-success button-margin"
                onClick={this.addNode}
              >
                Add node
              </button>
              <ol>
                {this.state.listElements}
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                type="button"
                className="btn btn-primary button-margin"
                onClick={this.getJson}
              >
                Generate JSON
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <textarea
                className="form-control"
                rows="5"
                value={this.state.JsonValue}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainDocument />, document.getElementById('app'));
