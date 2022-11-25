import React, { useEffect, useState } from 'react'
import TodoList from '../components/TodoList';
import { InputTodo } from '../components/InputTodo';
import TodoStore, { Todo } from '../stores/TodoStore';

import styles from '../styles/homeScreen.module.css';
import { autorun, observable, reaction, runInAction, when } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { resolve } from 'node:path/win32';
import { useStoreContextHook } from '../context/storeContext';


export const HomeScreen = observer(() => {

  const { todos } = useStoreContextHook();

  useEffect(() => {
    const promiseWhen = when(() => !appUI.todosVisible);

    promiseWhen.then(() => {
      console.log("Empty!");
    });


    // const promiseWhen = when(
    //   ()=> !appUI.todosVisible, 
    //   ()=>console.log("Empty!!!!"));



  }, []);


  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    toggleTodoVisible() {
      this.loading = true;

      new Promise(
        (resolve) => {
          setTimeout(() => {
            console.log("OK");
            resolve(resolve);
          }, 1000);
        }

      ).then(
        () => {
          runInAction(() => {
            console.log("**");
            this.loading = !this.loading;
            this.todosVisible = !this.todosVisible;

          })
        }
      )
    }
  }));

  const handleShowData = () => {
    appUI.toggleTodoVisible();
  }

  return (
    <div className={styles['todo-list-wrapper']}>
      <InputTodo />
      <div>
        {JSON.stringify(appUI.loading)}
        <h2 onClick={handleShowData}>
          <span>{appUI.todosVisible ? "Hide" : "Show"}</span>
          Number: {todos.unfinishedTodos.length}
          <br />
          Todos list
        </h2>
        {appUI.todosVisible && <TodoList />}

      </div>
    </div>
  )
}
)

// export  default observer(HomeScreen);