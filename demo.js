const c = require('./index');
const lines = new Map();
lines.set('1', 'there is a house in New Orleans');
lines.set('2', 'they call the Rising Sun');
lines.set('3', 'and it has been the ruin of many a poor boy');
lines.set('4', 'in god I know I have won');

let counter = 0;
const write = (lines, interval) => {
  if (counter >= lines.size) { if (interval) clearInterval(interval); return; }
  counter++;
  c(lines.get(counter.toString()));
};

write(lines);
const writer = setInterval(() => write(lines, writer), 3000);
