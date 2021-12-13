/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  return coordinates.charCodeAt(0) % 2 !== Number(coordinates[1]) % 2;
};
