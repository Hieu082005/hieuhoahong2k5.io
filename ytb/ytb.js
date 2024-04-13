const axios = require('axios');
const config = require('../config.json');

async function searchYouTube(query) {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: query,
                part: 'snippet',
                maxResults: 10,
                key: config.youtube_api_key
            }
        });

        const videos = response.data.items.map((item, index) => {
            return {
                title: item.snippet.title,
                videoId: item.id.videoId,
                url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                index: index + 1
            };
        });

        if (videos.length === 0) {
            console.log('Không tìm thấy video nào.');
        }

        return videos;
    } catch (error) {
        console.error('Lỗi khi tìm kiếm trên YouTube:', error);
        return [];
    }
}

module.exports = { searchYouTube };
