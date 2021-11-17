// https://www.codewars.com/kata/58a12162784e0cfe4700000d

let GCDMeansGreatestCommonDivisorOrHighestCommonFactor = (g = (a, b) => (b == 0 ? a : g(b, a % b)));
