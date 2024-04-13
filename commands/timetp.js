const moment = require('moment-timezone');

module.exports = {
    name: 'time',
    description: 'Lấy thời gian ở các thành phố đã được định sẵn.',
    execute(ctx) {
        // Thời gian ở các thành phố đã được định sẵn
        const timeHoChiMinh = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
        const timeLondon = moment.tz("Europe/London").format("HH:mm:ss || D/MM/YYYY");
        const timeSaoPaulo = moment.tz("America/Sao_Paulo").format("HH:mm:ss || D/MM/YYYY");
        const timeSeoul = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
        const timeTokyo = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
        const timeNewYork = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
        const timeKualaLumpur = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");
        const timeParis = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
        const timeLisbon = moment.tz("Europe/Lisbon").format("HH:mm:ss || D/MM/YYYY");

        // Tạo thông điệp chứa thời gian ở các thành phố đã được định sẵn
        const message = `🌐=== 「 TIME AROUND THE WORLD 」===🌐\n\n🇻🇳 Hà Nội: ${timeHoChiMinh}\n🇬🇧 London: ${timeLondon}\n🇧🇷 Brasília: ${timeSaoPaulo}\n🇰🇷 Seoul: ${timeSeoul}\n🇯🇵 Tokyo: ${timeTokyo}\n🇺🇸 New York: ${timeNewYork}\n🇲🇾 Kuala Lumpur: ${timeKualaLumpur}\n🇫🇷 Paris: ${timeParis}\n🇵🇹 Lisbon: ${timeLisbon}`;
        
        // Gửi tin nhắn chứa thông điệp về thời gian ở các thành phố
        ctx.reply(message);
    },
};