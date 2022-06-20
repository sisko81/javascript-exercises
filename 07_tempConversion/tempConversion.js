const ftoc = function(fahrenheit) {
  let fTemp = fahrenheit;
  let f2c = (fTemp - 32) * 5 / 9;
  return Number(f2c.toFixed(1))
};

const ctof = function(celcius) {
  let cTemp = celcius;
  let c2f = (cTemp * 9 /5) +32;
  return Number(c2f.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
