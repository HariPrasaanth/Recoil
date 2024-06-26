import styled from "styled-components";
import TodoItemCreator from "./TodoItemCreator";
import { useRecoilValue } from "recoil";
import { todoIdsAtom, todoListState } from "../state/recoilstate";
import TodoItem from "./TodoItem";

const TodoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`
const TodoList = () => {
    const todosIds = useRecoilValue(todoIdsAtom)
    return (
        <>
            <TodoMainContainer>
                <TodoItemCreator />
                {todosIds?.map((todo: number)=>(
                    <TodoItem id={todo} key={todo}/>
                ))}
            </TodoMainContainer>
        </>
    )
}

export default TodoList;