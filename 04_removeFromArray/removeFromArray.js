const removeFromArray = function() {
 const array = [1,2,3,4];
 const alteredArray = array.splice(2,1);
 const newArray = alteredArray;
console.log(array)
 return array
};

// Do not edit below this line
module.exports = removeFromArray;
