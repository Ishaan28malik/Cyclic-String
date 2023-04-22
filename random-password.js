
  const length = 12;
  
  const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase="abcdefghijklmnopqrstuvwxyz" // or else just use the upperCase and add .toLowerCase()
  const numbers  ="123456789"
  const symbols  ="!@#$%^&*()_+=;':"<>?,./"
  const randomValue = upperCase + lowerCase + symbols + numbers // this is added because the logic below will need this after first 4 random values are completed rest 8 will be picked from here
  
function randomPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random * upperCase.length)];
  password += lowerCase[Math.floor(Math.random * lowerCase.length)];
  password += numbers[Math.floor(Math.random * numbers.length)];
  password += symbols[Math.floor(Math.random * symbols.length)];
  while ( length > password.length ){
  password += randomValue[Math.floor(Math.random * randomValue.length)];
  }
}
