import { ADD_STRING, DELETE_STRING } from '../action/actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initializeState = {
    stringList: []
}

export default createReducer (initializeState, {
    [ADD_STRING]: ((state, action) => ({ stringList: [...state.stringList,action.payload.string] })),
    [DELETE_STRING]: (state, action) => ({ stringList: state.stringList.filter((item, index) => index !== action.payload.index) })
})