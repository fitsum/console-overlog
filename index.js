// write a line to console
const overlog = input => {
  process.stdout.write(input);
  if (input !== '\r\n') process.stdout.cursorTo(0);
};

module.exports = overlog;
