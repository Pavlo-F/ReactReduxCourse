import { fetchData } from '../API/YouTube.js'

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'



export function getPhotos(playListId) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: playListId,
        })

        fetchData(playListId).then(function (result) {

            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: result,
            })
        });
    }
}