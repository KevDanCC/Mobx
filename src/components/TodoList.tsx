import { observer } from 'mobx-react-lite';
import { join } from 'path/posix';
import { useStoreContextHook } from '../context/storeContext';
import TodoStore, { Todo } from '../stores/TodoStore';
import styles from '../styles/todoList.module.css';


const TodoList = () => {

    const { todos } = useStoreContextHook();

    const handleToggleTodo = (t: Todo) => {
        todos.toggle(t);
    }

    const handleRemovoTodo = (t: Todo) => {
        todos.remove(t);
    }


    todos.list.map(uniqueElement => console.log(`${uniqueElement.title}`));
    return (
        <>
            <ul className={styles['todo-list']}>
                {
                    todos.list.map(uniqueElement =>
                        <li key={uniqueElement.id}>
                            <label htmlFor={String(uniqueElement.id)}
                                className={uniqueElement.isDone ? styles.done : ''}
                            >{uniqueElement.title}</label>

                            <button onClick={() => handleRemovoTodo(uniqueElement)}
                                className={[styles.remove, uniqueElement.isDone && styles.done].join(" ")}
                            > Remover
                            </button>

                            <button onClick={() => handleToggleTodo(uniqueElement)} >
                                <input type="checkbox" id={String(uniqueElement.id)} readOnly tabIndex={-1} />
                            </button>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
export default observer(TodoList);