// memo
let lastInput;

// write a line to console
const overlog = (input, cleanInput) => {
  if (cleanInput && typeof lastInput !== 'undefined') {
    const diff = lastInput.length - input.length;
    if (diff > 0) { input += Array(diff).fill(' ').join(''); }
  }
  process.stdout.write(input);
  lastInput = input;
  if (input !== '\r\n') process.stdout.cursorTo(0);
};

module.exports = overlog;
