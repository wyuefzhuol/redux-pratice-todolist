import { ADD_STRING, DELETE_STRING, MAKE_TODO, GET_TODO_LIST } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const addItemAction = createAction(ADD_STRING, (todoObject) => ({ payload: { todoObject } }));

export const deleteItemAction = createAction(DELETE_STRING, (index) => ({ payload: { index } }));

export const makeTodoAction = createAction(MAKE_TODO, (index) => ({ payload: { index } }));

export const getTodoList = createAction(GET_TODO_LIST, (todoList) => ({ payload: {todoList} }));