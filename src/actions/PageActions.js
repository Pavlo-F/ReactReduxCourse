import { fetchData } from '../API/YouTube.js'

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

function makeYearPhotos(data, selectedYear) {
    let createdYear,
        yearPhotos = []

    data.forEach(item => {
        createdYear = item.date.getFullYear();
        if (createdYear === selectedYear) {
            yearPhotos.push(item);
        }
    })

    yearPhotos.sort((a, b) => b.likes.count - a.likes.count)

    return data;
}


export function getPhotos(year) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year,
        })

        fetchData().then(function (result) {

            const photos = makeYearPhotos(result, year);

            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: photos,
            })
        });
    }
}