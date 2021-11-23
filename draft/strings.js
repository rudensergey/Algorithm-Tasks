let counter;

const log = (string) => {
  if (!counter) counter = 0;
  counter++;

  console.log(`${counter}) ${string}`);
};

const str = "He's my king from this day until his aaaaaalast day";

// log(str.charAt(1));
// log(str.substring(1, 4));

let count = 0;
let pos = str.indexOf("a");

while (pos !== -1) {
  count++;
  pos = str.indexOf("a", pos + 1);
}

var uri =
  "http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv";

var queryString = {};

uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});

// console.log("ID: " + queryString["product_id"]); // ID: 2140
// console.log("Name: " + queryString["product_name"]); // Name: undefined”

var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
  ""
);

function encodeId(num) {
  var base = DICTIONARY.length;
  var encoded = "";

  if (num === 0) {
    return DICTIONARY[0];
  }

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }

  return reverseWord(encoded);
}

function reverseWord(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

console.log(encodeId("12314"));
