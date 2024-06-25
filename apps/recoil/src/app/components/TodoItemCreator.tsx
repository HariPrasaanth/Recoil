import { useState, useRef, ChangeEvent } from "react";
import { useSetRecoilState } from "recoil";
import { Button } from 'primereact/button';
import {Toast} from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import styled from "styled-components";
import { todoListState } from "../state/recoilstate";

let id=0;
function getId(){
    return id++;
}

const TodoContainer = styled.div`
        display: flex;
        column-gap: 1rem;
    `

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);
    const toast = useRef(null);

    const showError = () => {
        toast?.current?.show({severity:'error', summary: 'Error', detail:'Todo Content is required', life: 3000});
    }

    const onChange = ({target: {value}}: {target:{value:string}}) => {
        setInputValue(value);
    }
    const addItem = () => {
        if(inputValue.trim().length===0){
            return showError();
        }
        setTodoList(oldTodoList => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ])
        setInputValue("")
    }

    return(
        <>
            <Toast ref={toast} />
            <TodoContainer>
            <InputText value={inputValue} onChange={onChange} size="small" />
            <Button onClick={addItem} label="Add" size="small" />
            </TodoContainer>
        </>
    )
}

export default TodoItemCreator;