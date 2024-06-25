import { atom, atomFamily } from "recoil";

export const todoIdsAtom = atom({
    key: "todoIds",
    default: []
})

export const todoAtomFamily = atomFamily({
    key: "",
    default:[]
})

export const todoListState = atom({
    key: "Todo List",
    default: []
});