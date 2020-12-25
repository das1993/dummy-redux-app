import { combineReducers } from 'redux'
import userUi from './ui/userUiDux'
import dashboardUi from './ui/dashboardUiDux'
import user from './userDux'
import dashboard from './dashboardDux'

export default combineReducers({
    ui: combineReducers({
        user: userUi,
        dashboard: dashboardUi
    }),
    apiData: combineReducers({
        user,
        dashboard,
    })
})