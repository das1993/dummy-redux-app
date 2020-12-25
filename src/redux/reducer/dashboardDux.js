import { createAction, createReducer } from 'redux-act'
export const setData = createAction('DASHBOARD/SET_DATA')
export const clearData = createAction('DASHBOARD/CLEAR_DATA')

const handlers = {
    [setData](state, payload) {
        return {
            ...state,
            dashboard: payload
        }
    },

    [clearData](ui, payload) {
        return {
            ...ui,
            dashboard: []
        }
    }
}

export default createReducer(handlers, {})
