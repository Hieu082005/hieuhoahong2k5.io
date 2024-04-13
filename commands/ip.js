const { Composer } = require('telegraf');
const getinfo = require('ipinfo');

const ipCommand = new Composer();

ipCommand.command('ip', async (ctx) => {
    const args = ctx.message.text.split(' ').slice(1); // Lấy các đối số sau lệnh /ip
    if (args.length === 0) {
        return ctx.reply('Vui lòng nhập địa chỉ IP.');
    }

    try {
        const data = await getinfo.getAll(args[0]);
        const message = `=====DATA======\n❄️Vùng: ${data.countryCode}\n💦Nước: ${data.country}\n👀ST: ${data.region}\n🐋Tỉnh: ${data.regionName}\n🦋Thành phố: ${data.city}\n🐧Múi giờ: ${data.timezone}\n🏝Nhà mạng: ${data.org}`;
        ctx.reply(message);
        
        if (data.message === 'private range') {
            ctx.reply('private range !!!');
        }
        if (data.message === 'invalid query') {
            ctx.reply('Địa chỉ IP không hợp lệ.');
        }
    } catch (error) {
        console.error('Error getting IP info:', error);
        ctx.reply('Đã xảy ra lỗi khi lấy thông tin IP.');
    }
});

module.exports = ipCommand;
