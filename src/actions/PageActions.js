export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

//eslint-disable-next-line
import YouTube from '../API/YouTube'

let photosArr = []

function makeYearPhotos(photos, selectedYear) {
    let createdYear,
        yearPhotos = []

    photos.forEach(item => {
        createdYear = item.date.getFullYear();
        if (createdYear === selectedYear) {
            yearPhotos.push(item)
        }
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

        youTube.fetchData().then(function () {

            setTimeout(function () { // костыль
                var photos = youTube.getPhotos();

                photosArr = makeYearPhotos(photos, year);


                dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: photosArr,
                })
            }, 2000);

        });
    }
}