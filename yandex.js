let stones = 'wefwefffffkjshdbjhasbdcklawevuianwerhlvbaslhjdg';
let jewelry = 'fjf';

function resolve (jew, stone) {
    console.log('start')
    let arr = [];

    for (let j = 0; j < jew.length; j++) {
        for (let s = 0; s < stone.length; s++) {
            if (jew[j] === stone[s]) {
                arr.push(jew[j]);
            }
        }
    }
    
    console.log("RESOLVE: The number of stones which are jewelry " + arr.length)
}

resolve(jewelry, stones);