function findShort(s){
    const words = s.split(' ');
    let minLength = words[0].length;
    
    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length;
      
      if (wordLength <= minLength) {
        minLength = wordLength;
      } 
      
    }; 
    
    return minLength
  }