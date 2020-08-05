import { ADD_STRING, DELETE_STRING, MAKE_TODO, GET_TODO_LIST } from '../action/actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initializeState = {
    stringList: [],
}

export default createReducer (initializeState, {
    [ADD_STRING]: ((state, action) => ({ stringList: [...state.stringList, action.payload.todoObject] })),
    [DELETE_STRING]: ((state, action) => ({ stringList: state.stringList.filter((item, index) => item.id !== action.payload.id) })),
    [MAKE_TODO]: ((state, action) => ({ stringList: state.stringList.map((item, index) => {
        if (item.id === action.payload.id) {
            return {...item, status:!item.status}
        }
        return item;
    }) })),
    [GET_TODO_LIST]: ((state, action) => ({ stringList: action.payload.todoList.map((item, index) => item) }))
})