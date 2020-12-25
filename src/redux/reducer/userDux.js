import { createAction, createReducer } from 'redux-act'
export const setData = createAction('USER/SET_DATA')
export const clearData = createAction('USER/CLEAR_DATA')

const handlers = {
    [setData](state, { data }) {
        return {
            ...state,
            ...data
        }
    },

    [clearData](ui, payload) {
        return {
            ...ui,
            user: {}
        }
    }
}

export default createReducer(handlers, {})
