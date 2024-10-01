import React from "react";
import { TaskInputProps } from "../interfaces";

class TaskInput extends React.Component<TaskInputProps> {
    render() {
        const { value, onChange } = this.props;
        return (
            <input
                type="text"
                placeholder="Enter a new task"
                value={value}
                onChange={onChange}
            />
        )

    }
};

export default TaskInput;