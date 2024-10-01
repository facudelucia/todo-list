import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList  from '../src/components/TaskList'
import { Task } from '../src/interfaces';

describe('Tests in <TaskList />', () => {
  test('should call toggleTask when a task is clicked', () => {
    const tasks: Task[] = [
      { text: 'Task 1', completed: false },
      { text: 'Task 2', completed: true },
    ];

    const toggleTask = jest.fn();

    render(<TaskList tasks={tasks} toggleTask={toggleTask} />);
    
    const taskItem = screen.getByText('Task 1');
    fireEvent.click(taskItem);

    expect(toggleTask).toHaveBeenCalled();
    expect(toggleTask).toHaveBeenCalledWith(0);
  });
});
