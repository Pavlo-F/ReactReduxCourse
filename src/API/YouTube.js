import key from './key'

let photos = [];

export default class YouTube {
    getPhotos() {
        return photos;
    }

    fetchData() {

        photos = [];
        var url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=LLOynRdpGiTCNFhCgD0RTe1w&key=${key}`;

        return fetch(url).then(function (response) {
            return response.json().then(function (json) {

                for (let i = 0; i < json.items.length; i++) {
                    let videoId = json.items[i].contentDetails.videoId;
                    let statUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${key}`;

                    YouTube.fetchStatistic(statUrl);

                }

            });
        });
    }



    static fetchStatistic(yUrl) {
    fetch(yUrl)
        .then(response => response.json())
        .then(function (response) {

            let item = response.items[0];

            let likes = {};
            likes.count = item.statistics.likeCount;
            let date = new Date();

            photos.push({ url: item.snippet.thumbnails.high.url, likes, date, id: item.id });

        })
        .catch(function (error) {
            console.log(error);
        });
    }

}
