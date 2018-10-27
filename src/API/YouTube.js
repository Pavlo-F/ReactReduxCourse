import key from './key'

export function fetchData(playListId) {

    var url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playListId}&key=${key}`;

    return fetch(url).then(function (response) {
        return response.json().then(function (json) {

            const promises = [];

            for (let i = 0; i < json.items.length; i++) {
                const videoId = json.items[i].contentDetails.videoId;
                const statUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${key}`;

                promises.push(getVideoInfo(statUrl));
            }

            return Promise.all(promises).then((result) => result);
        });
    });
}



function getVideoInfo(yUrl) {
    return fetch(yUrl)
        .then(response => response.json())
        .then(function (response) {

            const item = response.items[0];
            const date = new Date();
            const likes = {};
            likes.count = item.statistics.likeCount;

            return { url: item.snippet.thumbnails.high.url, likes, date, id: item.id };

        })
        .catch(function (error) {
            console.log(error);
        });
}


