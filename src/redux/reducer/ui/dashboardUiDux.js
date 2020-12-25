import { createAction, createReducer } from 'redux-act'
export const startPageFetching = createAction('DASHBOARD/START_PAGE_FETCHING')
export const stopPageFetching = createAction('DASHBOARD/STOP_PAGE_FETCHING')

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
