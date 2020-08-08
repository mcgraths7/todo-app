import React from 'react';

import generateUniqueId from '../../util/generateUniqueId';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    this.setState(() => ({
      title,
    }));
    // const step = {
    //   id: generateUniqueId(),
    //   title,
    //   isDone: false,
    // }
  }

  handleChange(e) {
    this.setState(() => ({
      title: e.target.value,
    }));
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <label htmlFor="stepTitle">
          Title
          <input type="text" onChange={this.handleChange} value={title} />
          <button type="button" onClick={this.handleSubmit}>Add!</button>
        </label>
      </form>
    );
  }
}

export default StepForm;
