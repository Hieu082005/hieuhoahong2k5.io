// utils.js

// Hàm xử lý lỗi
const throwError = (name, threadID, messageID) => {
    console.error(`Error occurred in command: ${name}`);
    // Có thể thực hiện các xử lý khác tùy theo yêu cầu của bạn ở đây
};

// Xuất các hàm và biến bạn muốn sử dụng ở nơi khác
module.exports = {
    throwError
};
