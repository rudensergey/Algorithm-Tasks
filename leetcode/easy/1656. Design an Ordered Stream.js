/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.stream = new Array(n);
  this.currentPointer = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey] = value;
  return this.checkValue();
};

OrderedStream.prototype.checkValue = function (idKey, value) {
  const response = [];

  while (this.currentPointer < this.stream.length && this.stream[this.currentPointer]) {
    response.push(this.stream[this.currentPointer++]);
  }

  return response;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
