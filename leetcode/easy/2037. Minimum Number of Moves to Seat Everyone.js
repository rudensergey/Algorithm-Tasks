/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  const compare = (a, b) => a - b;

  seats.sort(compare);
  students.sort(compare);

  let sum = 0;
  let counter = 0;
  while (counter < seats.length) {
    sum += Math.max(seats[counter], students[counter]) - Math.min(seats[counter], students[counter]);
    counter++;
  }

  return sum;
};
