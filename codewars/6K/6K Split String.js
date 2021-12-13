// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
   let result = [];

   for (let counter = 0; counter < str.length; counter++) {
      if (counter % 2 === 0)
         str[counter + 1] !== undefined
            ? result.push(str[counter] + str[counter + 1])
            : result.push(str[counter] + "_");
   }
   return result;
}
