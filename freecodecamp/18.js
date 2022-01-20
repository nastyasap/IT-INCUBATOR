function checkObj(obj, checkProp) {
    // Only change code below this line
    const a = obj.hasOwnProperty(checkProp);
    if (a) {
      return obj[checkProp];
    } else {
      return 'Not Found';
    }
    // Only change code above this line
  }