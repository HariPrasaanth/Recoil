import styled from "styled-components";
import TodoItemCreator from "./TodoItemCreator";
import { useRecoilValue } from "recoil";
import { todoListState } from "../state/recoilstate";
import TodoItem from "./TodoItem";

const TodoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`
const TodoList = () => {
    const todoList = useRecoilValue(todoListState)
    return (
        <>
            <TodoMainContainer>
                <TodoItemCreator />
                {todoList?.map((todoItem) => (
                    <TodoItem item={todoItem} key={todoItem.id} />
                ))}
            </TodoMainContainer>
        </>
    )
}

export default TodoList;