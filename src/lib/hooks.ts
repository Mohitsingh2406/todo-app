import { useContext } from "react"
import { TodosContext } from "../context/TodosContextProvider"

export function useTodosContext(){
    const context = useContext(TodosContext)
    if(!context){
        throw new Error("Forget to add provider")
    }
    return context;
}