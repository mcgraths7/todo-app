import React from 'react';


class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.addStep = this.addStep.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.resetTitle = this.resetTitle.bind(this);
    this.addStepOnReturn = this.addStepOnReturn.bind(this);
  }

  addStep(e) {
    e.preventDefault();
    const { title } = this.state;
    const { todoId, receiveStep } = this.props;
    const stepHash = {
      todoId,
      title,
    };
    receiveStep(stepHash);
    this.resetTitle();
  }

  addStepOnReturn(e) {
    if (e.keyCode === 13) {
      this.addStep(e);
    }
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
          <input type="text" onChange={this.updateTitle} onKeyDown={this.addStepOnReturn} value={title} />
          <button type="button" onClick={this.addStep}>Add!</button>
        </label>
      </form>
    );
  }
}

export default StepForm;
