// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

const lovefunc = (flower1, flower2) => {
  const f = flower1 % 2 === 0;
  const s = flower2 % 2 === 0;
  return (f && !s) || (!f && s) ? true : false;
};
