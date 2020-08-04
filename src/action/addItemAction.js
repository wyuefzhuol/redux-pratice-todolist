import { ADD_STRING } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const addItemAction = createAction(ADD_STRING, (string) => ({ payload: { string } }));