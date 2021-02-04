
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;
  else return array.reduce((min, current) => min > current ? current : min);
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  else return array.reduce((max, current) => max < current ? current : max);
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;
  else return array.reduce((sum, current) => sum + current, 0) / array.length;
}
