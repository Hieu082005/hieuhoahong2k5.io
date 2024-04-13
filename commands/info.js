const { Composer } = require('telegraf');

const infoCommand = new Composer();

infoCommand.command('info', (ctx) => {
    const userInfo = `
    🙋‍♂️ 𝙏𝙚̂𝙣: 𝑳𝒂 𝑽𝒂̆𝒏 𝑯𝒊𝒆̂́𝒖 🥰✨
    ⚜️ 𝘽𝙞𝙚̣̂𝙩 𝙙𝙖𝙣𝙝: hieuhoahong2k5 🌹
    ❎ 𝙏𝙪𝙤̂̉𝙞: 18 
    🎂 𝙎𝙞𝙣𝙝 𝙣𝙝𝙖̣̂𝙩: 02/08/2005
    ♂️ 𝙂𝙞𝙤̛́𝙞 𝙩𝙞́𝙣𝙝: 𝙉𝙖𝙢
    🚶 𝘾𝙝𝙞𝙚̂̀𝙪 𝘾𝙖𝙤: 1𝒎65
    ⚖️ 𝘾𝙖̂𝙣 𝙣𝙖̣̆𝙣𝙜: 60𝒌𝒈                 
    😉 𝙏𝙞́𝙣𝙝 𝙘𝙖́𝙘𝙝: 𝙃𝙞𝙚̂̀𝙣 𝙡𝙖̀𝙣𝙝
    😍 𝙎𝙤̛̉ 𝙩𝙝𝙞́𝙘𝙝: 𝒄𝒐𝒅𝒆 𝒅𝒂̣𝒐, 𝒍𝒂̀𝒎 𝒃𝒐𝒕
    ♋ 𝘾𝙪𝙣𝙜: 𝑺𝒖̛ 𝒕𝒖̛̉ ♌
    💘 𝙈𝙤̂́𝙞 𝙦𝙪𝙖𝙣 𝙝𝙚̣̂: 𝑭𝑨
    🏡 𝙉𝙤̛𝙞 𝙤̛̉: 𝑻𝒖𝒚𝒆̂𝒏 𝑸𝒖𝒂𝒏𝒈 𝑷𝒓𝒐𝒗𝒊𝒏𝒄𝒆
    🖥️ 𝘾𝙤̂𝙣𝙜 𝙫𝙞𝙚̣̂𝙘: 𝙃𝙤̣𝙘 𝙩𝙖̣̂𝙥, 𝒍𝒂̀𝒎 𝒃𝒐𝒕
    📲 𝙇𝙞𝙚̂𝙣 𝙝𝙚̣̂: (𝟘𝟛𝟡)-𝟠𝟛𝟜𝟚-𝟝𝟡𝟘, (𝟘𝟠𝟟)-𝟟𝟡𝟞𝟡-𝟝𝟠𝟘
    🌐 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠: https://www.facebook.com/hieuhoahong2k5.com.vn/
    💌 𝙀𝙢𝙖𝙞𝙡: 𝒉𝒊𝒆𝒖𝒉𝒐𝒂𝒉𝒐𝒏𝒈2𝒌5@𝒈𝒎𝒂𝒊𝒍.𝒄𝒐𝒎
    `;
    ctx.reply(userInfo);
});

module.exports = infoCommand;
