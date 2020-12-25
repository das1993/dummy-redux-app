import axios from 'axios'
import * as userActions from '../reducer/userDux'
import * as userUiActions from '../reducer/ui/userUiDux'

export const getUserDetails = currentMonth => (dispatch, getState) => {
    dispatch(userUiActions.startPageFetching())
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/1',
    })
        .then((response = {}) => {
            dispatch(userActions.setData({data: response.data}))
            dispatch(userUiActions.stopPageFetching())
        })
        .catch(error => {
            console.error('error while fetching user details')
            dispatch(userUiActions.stopPageFetching())
        })
}
