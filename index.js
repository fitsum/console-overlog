
// write a line to console
const overlog = (content) => {
    process.stdout.write(content);
    cr();								
}

// carriage return, same line 
// why is this seperate
const cr = () => {
    process.stdout.cursorTo(0);
}

module.exports = overlog;

