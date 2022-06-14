const reverseString = function(str) {
  const originalArray = str.split('');
  const reverseArray = originalArray.reverse();
  const joinedArray = reverseArray.join('')
  
  return joinedArray

};

// Do not edit below this line
module.exports = reverseString;
