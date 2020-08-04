import { ADD_STRING } from '../action/actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initializeState = {
    stringList: []
}

export default createReducer (initializeState, {
    [ADD_STRING]: ((state, action) => ({ stringList: [...state.stringList,action.payload.string] }))
})