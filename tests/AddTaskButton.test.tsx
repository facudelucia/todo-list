import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskButton  from '../src/components/AddTaskButton'

describe('Tests in <AddTaskButton />', () => {
  test('should call onClick when the button is clicked', () => {
    const onClick = jest.fn();
    render(<AddTaskButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: /Add Task/i });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
