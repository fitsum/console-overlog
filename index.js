// write a line to console
const overlog = input => {
  if (input === '\r\n') { process.stdout.write(input); return; }
  process.stdout.write(input);
  process.stdout.cursorTo(0);
};

module.exports = overlog;
