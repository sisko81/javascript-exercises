const sumAll = function(min, max) {
  if(min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  if(!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if(min < 0 || max < 0) return 'ERROR'
  let sum = 0;
  for(let i = min; i < max + 1; i++) {
    sum += i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
