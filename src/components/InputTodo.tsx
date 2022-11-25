import React, { FormEvent, useState } from 'react'
import { useStoreContextHook } from '../context/storeContext';
import TodoStore from '../stores/TodoStore';
import styles from '../styles/inputTodo.module.css';

export const InputTodo = () => {

    const { todos } = useStoreContextHook();


    const handleInputForm = (e: FormEvent) => {
        e.preventDefault();

        const entireForm = e.target as HTMLFormElement;
        const formData = new FormData(entireForm);
        const value = String(formData.get('todo-input') || "");

        todos.add(value);
        entireForm.reset();
    }

    return (
        <form
            className={styles["todo-input-group"]}
            // onSubmit={handleAddTodo}
            onSubmit={handleInputForm}
        >
            <input
                type="text"
                name='todo-input'
                placeholder='Ingresa un nuevo ToDo'
            />
            <button
                type='submit'
            >Add Todo</button>
        </form>
    )
}
