import { fireEvent, render, screen } from "@testing-library/react";
import TodoApp from "../src/App"
import React from "react";

describe('<TodoApp />', () => {

    test('Must show title in <h1>', () => {

        const title = 'Todo List';
        render(<TodoApp />);
        expect(screen.getByText(title)).toBeTruthy();


        expect(screen.getByTestId('test-title').innerHTML).toContain(title)

    });

    test('should change correctly input', () => {
        render(<TodoApp />);

        const input = screen.getByRole('textbox') as HTMLInputElement

        fireEvent.change(input, { target: { value: 'New task' } });

        expect(input.value).toBe('New task')
    });

    test('should add correctly the task', () => {
        render(<TodoApp />);

        const input = screen.getByRole('textbox') as HTMLInputElement

        fireEvent.change(input, { target: { value: 'New task' } });

        const button = screen.getByRole('button', { name: /Add Task/i });
        fireEvent.click(button);

        expect(screen.getByText('New task')).toBeTruthy()
    });

    test('should NOT add the task and show error message', () => {
        render(<TodoApp />);

        const input = screen.getByRole('textbox') as HTMLInputElement;
    
        fireEvent.change(input, { target: { value: '' } }); 
    
        const button = screen.getByRole('button', { name: /Add Task/i });
        fireEvent.click(button);
    
        expect(screen.queryByText('Another task')).toBeNull();
        expect(screen.getByText('Cannot be empty')).toBeTruthy();
    });

})
