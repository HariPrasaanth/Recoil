import { atom } from "recoil";

export const todoListState = atom({
    key: "Todo List",
    default: []
});