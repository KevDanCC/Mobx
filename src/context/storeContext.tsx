import { createContext, useContext } from "react";
import TodoStore from "../stores/TodoStore";


const store = {
    todos:  TodoStore()
}


export const StoreContext = createContext(store);
 
export const useStoreContextHook = () => {
    return useContext(StoreContext);
}

export default store;