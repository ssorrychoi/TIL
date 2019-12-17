const logger = require("./logger");

const wrapper = () => {
  logger(`프로그램 실행중...`);
};

module.exports = wrapper;
