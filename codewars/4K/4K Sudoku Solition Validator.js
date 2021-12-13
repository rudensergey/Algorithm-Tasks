// Sudoku Background

// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator

// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples

// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board) {
   let arr = [];
   let arrTwo = [];
   let template = "123456789";

   let squares = [[], [], [], [], [], [], [], [], []];

   for (let a = 0; a < board.length; a++) {
      for (let b = 0; b < board[a].length; b++) {
         arr.push(board[a][b]);
         arrTwo.push(board[b][a]);

         if (a < 3 && b < 3) squares[0].push(board[a][b]);
         if (a < 3 && b > 2 && b < 6) squares[1].push(board[a][b]);
         if (a < 3 && b > 5 && b < 9) squares[2].push(board[a][b]);

         if (a > 2 && a < 6 && b < 3) squares[3].push(board[a][b]);
         if (a > 2 && a < 6 && b > 2 && b < 6) squares[4].push(board[a][b]);
         if (a > 2 && a < 6 && b > 5 && b < 9) squares[5].push(board[a][b]);

         if (a > 5 && a < 9 && b < 3) squares[6].push(board[a][b]);
         if (a > 5 && a < 9 && b > 2 && b < 6) squares[7].push(board[a][b]);
         if (a > 5 && a < 9 && b > 5 && b < 9) squares[8].push(board[a][b]);
      }

      if (
         arr.sort().join("") !== template &&
         arrTwo.sort().join("") !== template
      )
         return false;

      arr = [];
      arrTwo = [];
   }

   for (let a = 0; a < 9; a++) {
      if (squares[a].sort().join("") !== template) return false;
   }

   return true;
}
