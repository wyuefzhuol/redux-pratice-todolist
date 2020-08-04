import { ADD_STRING, DELETE_STRING } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const addItemAction = createAction(ADD_STRING, (string) => ({ payload: { string } }));

export const deleteItemAction = createAction(DELETE_STRING, (index) => ({ payload: { index } }));