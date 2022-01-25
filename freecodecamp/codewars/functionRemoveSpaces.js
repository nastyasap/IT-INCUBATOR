function noSpace(x){
  let array = [];
  x.split(' ').forEach((symbol) => {if (symbol !== ' ') {
    array.push(symbol);
  }})
  return array.join('');
}