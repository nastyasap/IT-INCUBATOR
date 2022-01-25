function XO(str) {
    const chars  = str.split('');
    let countO = 0;
    let countX = 0;
    chars.forEach(function(char) {
      if (char === 'o' || char === 'O') {
        countO++;
      } else if (char === 'x' || char === 'X') {
        countX++;
      }
    })
    return countO === countX;
  }