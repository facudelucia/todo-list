import { fireEvent, render, screen } from '@testing-library/react';
import TaskInput from '../src/components/TaskInput';
import React from 'react';

describe('Tests in <TaskInput />', () => {
    
    test('should call onChange', () => {
        const onChange = jest.fn(); 
        render(<TaskInput value="" onChange={onChange} />);
        
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'New task' } });

        expect(onChange).toHaveBeenCalled();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

});
