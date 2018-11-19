const wrap = (line, maxLen) => {
  if (line.length <= maxLen) return line;
  line += ' ';
  line = line.split('');
  let fromIndex = maxLen;
  const result = [];
  let newLine;
  let i = 0;

  while (line.length !== 0) {// && i <= 5) {
    //i++;
    console.log(line);
    newLine = line.splice(0, line.lastIndexOf(' ', maxLen) + 1)
    console.log(newLine);
    result.push(newLine.join('').trim());
    console.log(result);
  }
  return result.join('\n');
};
module.exports = wrap;
