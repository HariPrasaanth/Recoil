import { useRecoilState } from "recoil";
import { todoAtomFamily, todoListState } from "../state/recoilstate";
import styled from "styled-components";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

type TodoArray = {
  id: number,
  text: string,
  isComplete: boolean
}[]

const replaceItemAtIndex = (arr: TodoArray, index: number, newValue: any) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: TodoArray, index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoLabel = styled.span`
      color: #06b6d4
    `

const LabelCheckBoxContainer = styled.div`
      display: flex;
      column-gap: 0.5rem;
  `

const TodoMainContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
  `

const TodoItem = ({ id }: { id: number }) => {
  const [todoList, setTodoList] = useRecoilState(todoAtomFamily(id));
  const index = todoList.findIndex((listItem) => listItem.id === id);

  /* const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    });
    setTodoList(newList);
  }; */

  const toggleItemCompletion = () => {
    const newList = [...todoList?.map(todo => {return {...todo, isComplete: !todo.isComplete}})]
    setTodoList(newList)
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <>
      {todoList?.map((a, index: number) =>
        <TodoMainContainer key={index}>
          <LabelCheckBoxContainer>
            <Checkbox checked={a?.isComplete} onChange={toggleItemCompletion} />
            <TodoLabel>{a?.text}</TodoLabel>
          </LabelCheckBoxContainer>
          <Button icon="pi pi-trash" severity="danger" onClick={deleteItem} />
        </TodoMainContainer>
      )}
    </>
  );
};

export default TodoItem;