// write a line to console
const overlog = (content) => {
  process.stdout.write(content);
  process.stdout.cursorTo(0);
  // cr();
};

module.exports = overlog;
