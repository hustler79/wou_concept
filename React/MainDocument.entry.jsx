'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { autobind } from 'core-decorators';
import NodeComponent from 'woumedia/Components/NodeComponent';

class MainDocument extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      templateName: 'test_template',
      sections: [],
      listElements: [],
      jsonValue: '',
    };
  }

  @autobind
  getJson() {
    this.setState({
      jsonValue: JSON.stringify(
        {
          template: this.state.templateName,
          items: this.state.sections,
        }
      ),
    });
  }

  @autobind
  setSections(section) {
    const currentSections = this.state.sections;

    currentSections[section.id] = section;

    this.setState({
      sections: currentSections,
    });
  }

  @autobind
  addNode() {
    this.setState({
      listElements: this.state.listElements.concat(
        <NodeComponent
          id={this.state.listElements.length}
          propagateData={this.setSections}
        />
      ),
      sections: this.state.listElements.concat({ [this.state.listElements.length]: {} }),
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
                value={this.state.jsonValue}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainDocument />, document.getElementById('app'));
