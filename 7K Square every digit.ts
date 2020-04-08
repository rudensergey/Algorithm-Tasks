https://www.codewars.com/kata/546e2562b03326a88e000020

class Kata {
    static squareDigits = (num: any) => +num
      .toString()
        .split("")
        .map((a: number) => a * a)
      .join("")
}