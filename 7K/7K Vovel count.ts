https://www.codewars.com/kata/54ff3102c1bad923760001f3

class Kata {
    static getCount(str: string) {
      let result: any = str.match(/[a|e|i|o|u]/gi)
      return result ? result.length : 0
    }
}