export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin() {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        })


        dispatch({
            type: LOGIN_SUCCESS,
            payload: 'username',
        })

    }
}