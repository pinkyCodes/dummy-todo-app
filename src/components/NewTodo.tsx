import React, { useRef } from 'react';
import './NewTodo.css';

// what is better: type or interface? still not sure what the diff is, need to double check
// I'd recommend checking this => https://github.com/microsoft/TypeScript/wiki/Performance, section: Preferring Interfaces over Intersections.
// Following that, and considering our Props definition CAN be extended, I'd use export interface NewTodoProps { ... }

// also, advice on how to manage the different TS interfaces - each in a separate file? they should have their own folder, I guess, but on what level of the project?
// Declare interfaces of component props in the same file as the Functional Component (my personal preference).
type NewTodoProps = {

    onAddTodo: (text: string) => void;
}

// Avoid using React.FC<T> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
const NewTodo = ({ onAddTodo }: NewTodoProps) => {
    const textInputRef = useRef<HTMLInputElement>(null); //always use .current when working with refs

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // maybe a better name is simply todo or todoText? 
        const enteredText = textInputRef.current!.value;
        // I'd rename the property to addTodo, you can let me know what you think.
        onAddTodo(enteredText);

        // is this even good practice, manipulating the DOM node manually? but if we use useRef(), there's no other way to clear the input field
        // I think it's good in this case, but I would like to hear if you have other ideas how we can do it.
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