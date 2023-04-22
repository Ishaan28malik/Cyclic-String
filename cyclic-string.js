for (let i = 0; i < original.length; i++) {
  let char = original.charAt(i);

  if (/[0-9]/.test(char)) { 
    computed += char;
  } else {
    let rotateBy = 2; 

    if ((i) % 3 == 0) {  
      rotateBy = 5;
    }
    if ((i) % 5 == 0) {  
      rotateBy = 9;
    }
    if ((i % 3) == 0 && (i % 5) == 0) {  
      rotateBy = 3;
    }

    let rotatedCharCode = ((char.charCodeAt(0) - 97 - rotateBy + 26) % 26) + 97;  
    let rotatedChar = String.fromCharCode(rotatedCharCode);
    computed += rotatedChar;
  }
}
