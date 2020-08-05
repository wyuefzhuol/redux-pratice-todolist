import { LOADING_TOGGLE } from '../action/actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initializeState = {
    loading: false,
}

export default createReducer (initializeState, {
    [LOADING_TOGGLE]: ((state, action) => ({ loading: action.payload.loading }))
})