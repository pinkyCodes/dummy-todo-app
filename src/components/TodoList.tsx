import './TodoList.css';

// export the interface
// Also, be consistent -> if you declare props in one file as interface, make sure you do so everywhere.
export interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
};

// Avoid using React.FC<T> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
const TodoList = ({ items, onDeleteTodo }: TodoListProps) => {

    // not a big fan of onDeleteTodo.bind(), is there no other way to write this?
    // onDeleteTodo => handleDeleteTodo or deleteTodo, or if you come up with a better name

    return (
        <ul>
            {items.map((todo) =>
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={onDeleteTodo.bind(null, todo.id)}>Remove</button> 
                </li>
            )}
        </ul>
    );
};

export default TodoList;