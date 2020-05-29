m1 = [
    [1, 3],
    [2, 5],
];
m2 = [
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
];

const determinant = m => {
    if (m.length === 1) return m[0][0];
    if (m.length !== m[0].length) return false;
    if (m.length <= 2) return m[0][0] * m[1][1] - m[1][0] * m[0][1];
    let firstRow = m.shift();
    let sum = 0;
    for (let varCounter = 1; varCounter <= firstRow.length; varCounter++) {
        let newArr = JSON.parse(JSON.stringify(m));
        for (let colCounter = 0; colCounter < newArr.length; colCounter++) {
            newArr[colCounter].splice(varCounter - 1, 1);
        }
        if (varCounter % 2 === 0) {
            sum -= firstRow[varCounter - 1] * determinant(newArr);
        } else {
            sum += firstRow[varCounter - 1] * determinant(newArr);
        }
    }
    return sum;
}

//console.log(determinant([[1]])); // 1
//console.log(determinant(m1)); // -1
console.log(determinant(m2)); // -20
