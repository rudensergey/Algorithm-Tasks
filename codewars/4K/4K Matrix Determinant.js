// https://www.codewars.com/kata/52a382ee44408cea2500074c

const determinant = (m) => {
    if (m.length === 1) return m[0][0];
    if (m.length !== m[0].length) return false;
    if (m.length <= 2) return m[0][0] * m[1][1] - m[1][0] * m[0][1];
    let fr = m.shift();
    let sum = 0;
    for (let v = 1; v <= fr.length; v++) {
        let a = JSON.parse(JSON.stringify(m));
        for (let c = 0; c < a.length; c++) {
            a[c].splice(v - 1, 1);
        }
        if (v % 2 === 0) {
            sum -= fr[v - 1] * determinant(a);
        } else {
            sum += fr[v - 1] * determinant(a);
        }
    }
    return sum;
};