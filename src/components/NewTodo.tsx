import React, { useRef } from 'react';
import './NewTodo.css';

// what is better: type or interface? still not sure what the diff is, need to double check
// also, advice on how to manage the different TS interfaces - each in a separate file? they should have their own folder, I guess, but on what level of the project?
type NewTodoProps = {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
    const textInputRef = useRef<HTMLInputElement>(null); //always use .current when working with refs

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        onAddTodo(enteredText);

        // is this even good practice, manipulating the DOM node manually? but if we use useRef(), there's no other way to clear the input field
        if (textInputRef.current) textInputRef.current.value = '';
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type='text' id='todo-text' ref={textInputRef} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default NewTodo;