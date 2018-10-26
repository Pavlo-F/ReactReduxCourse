export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

//eslint-disable-next-line
import YouTube from '../API/YouTube'


function makeYearPhotos(data, selectedYear) {
    let createdYear,
        yearPhotos = []

    data.forEach(item => {

        item.then(function (res) {
            createdYear = res.date.getFullYear();
            if (createdYear === selectedYear) {
                yearPhotos.push(res)
            }
        });
    })

    yearPhotos.sort((a, b) => b.likes.count - a.likes.count)

    return yearPhotos
}


export function getPhotos(year) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year,
        })

        var youTube = new YouTube();

        youTube.fetchData().then(function (data) {
            const photos = makeYearPhotos(data, year);

            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: photos,
            })

        });
    }
}