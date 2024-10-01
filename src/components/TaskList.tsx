import React from 'react';
import { TaskListProps } from '../interfaces';

class TaskList extends React.Component<TaskListProps> {
  render() {
    const { tasks, toggleTask } = this.props;
    
    return (
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={task.completed ? 'completed' : 'incomplete'}
          >
            {task.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList;
