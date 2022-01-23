function rangeOfNumbers(startNum, endNum) {
    if (startNum >= endNum) {
      return [startNum];
    } else {
      const countNumbers = rangeOfNumbers(startNum, endNum - 1);
      countNumbers.push(endNum);
      return countNumbers;
    }
  };