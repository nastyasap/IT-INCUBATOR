class SmallestIntegerFinder {
    findSmallestInt(args) {
      let minValue = args[0];
      args.forEach((value) => {if (value < minValue) {
        minValue = value;}
      })
      return minValue;
    }
  }