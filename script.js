const translateNumbers = (encodedMsg) => {
  let result = "";
  for (let char of encodedMsg) {
    if (char === "3") {
      result += "w";
    } else if (char === "7") {
      result += "l";
    } else {
        result += char;
    }
  }
  return result;
};


// Test function 
// console.log(translateNumbers("Th3 qu1ck br0wn f0x jumps 0v3r th3 l4zy d0g"));

// function to reverse string
const reverseWords = (str) =>{
  let reverseStr = str.split('').reverse().join("");
  return reverseStr;
}

// function to shift characters 
const shiftCharacters = (encodedMsg) => {
  let result = "";
  for (let char of encodedMsg) {
      // Check if the character is a letter
      if (/[a-zA-Z]/.test(char)) {
          // Calculate the new character code after shifting back by 3 positions
          let shiftedCharCode = char.charCodeAt(0) - 3;

          // Handle cycling around the alphabet if shifting takes us before 'A' or 'a'
          if ((char >= 'a' && shiftedCharCode < 'a'.charCodeAt(0)) || (char >= 'A' && shiftedCharCode < 'A'.charCodeAt(0))) {
              shiftedCharCode += 26; // Add 26 to cycle around the alphabet
          }

          // Append the shifted character to the result
          result += String.fromCharCode(shiftedCharCode);
      } else {
          // If the character is not a letter, leave it unchanged
          result += char;
      }
  }
  return result;
};


// console.log(shiftCharacters("HELL1"));



// Add event listener to the button
const decodeBtn = document.querySelector(
    '#decodeButton'
  )

  console.dir(decodeBtn);

  decodeBtn.addEventListener('click',() =>{
//    get encoded msg from input field 
 const encodedMessage = document.querySelector('#encodedInput').value;
// Translate the msg 
const decodedMessage = translateNumbers(reverseWords(shiftCharacters(encodedMessage)));
console.log(decodedMessage);
const output = document.querySelector('#decodedOutput');
output.textContent = decodedMessage;
  });
