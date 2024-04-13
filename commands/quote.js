// quote.js

// Danh sách các trích dẫn tiếng Việt
const quotes = [
    "Hãy lắng nghe tiếng gọi của trái tim mình và làm theo nó. Đó mới là sự thành công thực sự.\nPaulo Coelho",
    "Đừng bao giờ từ bỏ hy vọng, vì ngày mai luôn là một ngày mới với những cơ hội mới.\nAnônimo",
    "Cuộc sống chỉ là những gì bạn làm ngay lúc này.\nLeo Tolstoy",
    "Hạnh phúc không phải là điều cuối cùng, hạnh phúc là con đường.\nMahatma Gandhi",
    "Hãy dũng cảm và kiên nhẫn. Ngày mai sẽ đến, với nó sẽ mang lại hi vọng mới.\nAnônimo",
    // Thêm các trích dẫn khác tại đây
];

module.exports = {
    name: 'quote',
    description: 'Hiển thị một trích dẫn nổi tiếng hoặc cảm động tiếng Việt.',
    execute(ctx) {
        // Chọn ngẫu nhiên một trích dẫn từ danh sách
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        // Gửi tin nhắn chứa trích dẫn
        ctx.reply(randomQuote);
    },
};
