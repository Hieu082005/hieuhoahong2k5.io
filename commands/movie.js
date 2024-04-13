// movie.js

const axios = require('axios');

module.exports = {
    name: 'movie',
    description: 'Hiển thị thông tin về một bộ phim cụ thể, bao gồm đánh giá, diễn viên và nội dung.',
    async execute(ctx, movieName) {
        try {
            // Gửi yêu cầu API để lấy thông tin về bộ phim
            const response = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=bfff1c59`);
            const movieData = response.data;

            // Kiểm tra xem bộ phim có tồn tại không
            if (movieData.Response === 'False') {
                ctx.reply('Không tìm thấy thông tin về bộ phim này. Vui lòng thử lại với tên phim khác.');
                return;
            }

            // Tạo thông điệp chứa thông tin về bộ phim
            const message = `🎬 **${movieData.Title}** (${movieData.Year})\n\n🌟 Đánh giá: ${movieData.imdbRating}/10\n🎭 Diễn viên: ${movieData.Actors}\n\n📄 Nội dung:\n${movieData.Plot}`;

            // Gửi tin nhắn chứa thông tin về bộ phim
            ctx.reply(message);
        } catch (error) {
            console.error('Đã xảy ra lỗi khi lấy thông tin phim:', error);
            ctx.reply('Xin lỗi, đã xảy ra lỗi khi lấy thông tin về bộ phim. Vui lòng thử lại sau.');
        }
    },
};
