import React from 'react';
import { Task, TodoAppState } from './interfaces';
import TaskInput from './components/TaskInput';
import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';

class TodoApp extends React.Component<{}, TodoAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [],
      newTaskText: '',
      errorMessage: ''
    };
  }

  addTask = (): void => {
    if (this.state.newTaskText.trim() === '') {
      this.setState({
        errorMessage: 'Cannot be empty'
      })
      return
    }

    const newTask: Task = {
      text: this.state.newTaskText,
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask],
      newTaskText: ''
    })
  };

  toggleTask = (index: number): void => {
    const tasks = this.state.tasks
    const task = tasks[index];
    if (task) {
      tasks[index] = { ...task, completed: !task.completed };
      this.setState({
        tasks: tasks,
      });
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.trim() !== '') {
      this.setState({
        errorMessage: '',
        newTaskText: event.target.value
      })
    }
  };

  render() {
    const incompleteTasks = this.state.tasks.filter((task) => !task.completed).length;
    return (
      <div className="container">
        <h1 data-testid="test-title">Todo List</h1>
        <TaskInput
          value={this.state.newTaskText}
          onChange={this.handleInputChange}
        />
        {this.state.errorMessage && <p className="error-message">{this.state.errorMessage}</p>}
        <AddTaskButton onClick={this.addTask} />
        <TaskList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <p>Incomplete tasks: {incompleteTasks}</p>
      </div>
    );
  }
}

export default TodoApp;
