function rgb(r, g, b) {
   return Array.from(arguments)
      .map(a => (a < 0 ? 0 : a))
      .map(b => (b > 255 ? "FF" : b.toString(16).toUpperCase()))
      .map(c => (c == 0 ? "00" : c))
      .map(d => (d.length === 1 ? "0" + d : d))
      .join("");
}
