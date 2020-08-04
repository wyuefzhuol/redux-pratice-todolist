import { ADD_STRING, DELETE_STRING, MAKE_TODO } from '../action/actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initializeState = {
    stringList: [],
}

export default createReducer (initializeState, {
    [ADD_STRING]: ((state, action) => ({ stringList: [...state.stringList, action.payload.todoObject] })),
    [DELETE_STRING]: ((state, action) => ({ stringList: state.stringList.filter((item, index) => index !== action.payload.index) })),
    [MAKE_TODO]: ((state, action) => ({ stringList: state.stringList.map((item, index) => {
        if (index === action.payload.index) {
            return {...item, isDo:!item.isDo}
        }
        return item;
    }) }))
})