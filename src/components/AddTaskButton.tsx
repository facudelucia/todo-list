import React from 'react';
import { AddTaskButtonProps } from '../interfaces';

class AddTaskButton extends React.Component<AddTaskButtonProps> {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>Add Task</button>;
  }
}

export default AddTaskButton;