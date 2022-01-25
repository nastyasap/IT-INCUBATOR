function century(year) {
    let cent = 0;
    if ((year/100) > Math.floor(year/100)) {
      cent = Math.floor(year/100) + 1;
    } else {
      cent = Math.floor(year/100);
    }  
    return cent;
  }