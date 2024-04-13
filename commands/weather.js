const axios = require('axios');

let lastUpdatedTime = null;

// Export một đối tượng có thuộc tính execute và update
module.exports = {
    execute: async function(ctx) {
        try {
            // Lấy địa điểm từ tin nhắn của người dùng
            const location = ctx.message.text.split(' ').slice(1).join(' ');

            if (!location) {
                // Nếu không có địa điểm được cung cấp, gửi tin nhắn lỗi
                return ctx.reply('Địa điểm không tồn tại!');
            }

            // Gọi hàm getWeatherInfo để lấy thông tin thời tiết
            const weatherInfo = await getWeatherInfo(location);

            // Gửi thông tin thời tiết dưới dạng tin nhắn
            ctx.reply(formatWeatherInfo(weatherInfo));
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Lỗi khi lấy thông tin thời tiết:', error);
            ctx.reply('Đã xảy ra lỗi khi lấy thông tin thời tiết.');
        }
    },
    update: async function(ctx) {
        try {
            // Lấy thông tin thời tiết cho vị trí hiện tại
            const weatherInfo = await getWeatherInfo('Hanoi'); // Thay 'Hanoi' bằng vị trí mặc định hoặc vị trí cố định

            // Gửi thông tin thời tiết dưới dạng tin nhắn
            ctx.reply(formatWeatherInfo(weatherInfo));
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Lỗi khi cập nhật thông tin thời tiết:', error);
            ctx.reply('Đã xảy ra lỗi khi cập nhật thông tin thời tiết.');
        }
    }
};

// Hàm async để lấy thông tin thời tiết từ API
async function getWeatherInfo(location) {
    try {
        // Sử dụng API của OpenWeatherMap
        const apiKey = 'a013dd4858a6497c6ef21a1285b4cfcb';
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: location,
                appid: apiKey,
                units: 'metric' // Đơn vị nhiệt độ Celsius
            }
        });

        // Trích xuất thông tin thời tiết từ phản hồi
        const weatherData = response.data;

        // Trích xuất thông tin cần thiết
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const humidity = weatherData.main.humidity;
        const windSpeed = weatherData.wind.speed;

        return {
            location: {
                name: cityName
            },
            temperature,
            weatherDescription,
            humidity,
            windSpeed
        };
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Lỗi khi lấy thông tin thời tiết:', error);
        throw new Error('Đã xảy ra lỗi khi lấy thông tin thời tiết.');
    }
}

// Hàm để định dạng thông tin thời tiết
function formatWeatherInfo(weatherInfo) {
    return `🌅 Địa điểm: ${weatherInfo.location.name}\n🌡 Nhiệt độ: ${weatherInfo.temperature}°C\n☁️ Tình trạng: ${weatherInfo.weatherDescription}\n💦 Độ ẩm: ${weatherInfo.humidity}%\n💨 Tốc độ gió: ${weatherInfo.windSpeed}km/h\n`;
}
