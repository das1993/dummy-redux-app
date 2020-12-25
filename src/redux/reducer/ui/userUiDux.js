import { createAction, createReducer } from 'redux-act'
export const startPageFetching = createAction('USER/START_PAGE_FETCHING')
export const stopPageFetching = createAction('USER/STOP_PAGE_FETCHING')

const handlers = {
    [startPageFetching](ui, payload) {
        return {
            ...ui,
            fetchingPage: true
        }
    },

    [stopPageFetching](ui, payload) {
        return {
            ...ui,
            fetchingPage: false
        }
    }
}

export default createReducer(handlers, {})
