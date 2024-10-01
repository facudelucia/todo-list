export interface Task {
    text: string;
    completed: boolean;
}
export interface TodoAppState {
    tasks: Task[];
    newTaskText: string;
    errorMessage: string;
}
export interface TaskInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface AddTaskButtonProps {
    onClick: () => void;
}
export interface TaskListProps {
    tasks: Task[];
    toggleTask: (index: number) => void;
}