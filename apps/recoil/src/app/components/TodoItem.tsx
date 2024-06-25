import { useRecoilState } from "recoil";
import { todoListState } from "../state/recoilstate";
import styled from "styled-components";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";

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

const TodoItem = ({ item }: {item: {id: number, text: string, isComplete: boolean}}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
  
    /* const editItemText = ({ target: { value } }) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value
      });
      setTodoList(newList);
    }; */
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete
      });
      setTodoList(newList);
    };
  
    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
      setTodoList(newList);
    };
  
    return (
      <TodoMainContainer>
          <LabelCheckBoxContainer>
          <TodoLabel>{item?.text}</TodoLabel>
          <Checkbox checked={item.isComplete} onChange={toggleItemCompletion} />
          </LabelCheckBoxContainer>
          <Button icon="pi pi-trash" severity="danger" onClick={deleteItem}/>
          </TodoMainContainer>
    );
  };
  
  export default TodoItem;