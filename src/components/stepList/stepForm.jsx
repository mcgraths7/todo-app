import React from 'react';

import generateUniqueId from '../../util/generateUniqueId';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.addStep = this.addStep.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.resetTitle = this.resetTitle.bind(this);
  }

  addStep(e) {
    e.preventDefault();
    const { title } = this.state;
    const { todoId, receiveStep } = this.props;
    const stepHash = {
      id: generateUniqueId(),
      todoId,
      title,
    };
    receiveStep(stepHash);
    this.resetTitle();
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value,
    });
  }

  resetTitle() {
    this.setState({
      title: '',
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <label htmlFor="stepTitle">
          Title
          <input type="text" onChange={this.updateTitle} value={title} />
          <button type="button" onClick={this.addStep}>Add!</button>
        </label>
      </form>
    );
  }
}

export default StepForm;
