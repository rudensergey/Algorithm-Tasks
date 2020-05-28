const solution = (input, markers) =>
    input.replace(new RegExp(`\\s([${markers[0]}|${markers[1]}].+)`, "gi"), "");
