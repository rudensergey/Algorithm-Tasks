https://www.codewars.com/kata/520446778469526ec0000001/solutions/javascript

Array.prototype.sameStructureAs = function (other) {
    if (this.length !== other.length) return false
    
    for (let val in this) {
      if (isArray(this[val]) !== isArray(other[val])) return false
      if (isArray(this[val])) { return this[val].sameStructureAs(other[val]) }
    }
    
    return true
};