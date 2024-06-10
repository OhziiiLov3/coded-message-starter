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

const reverseWords = (str) =>{
  let reverseStr = str.split('').reverse().join("");
  return reverseStr;
}

console.log(reverseWords("Zooty"));




// Add event listener to the button
const decodeBtn = document.querySelector(
    '#decodeButton'
  )

  console.dir(decodeBtn);

  decodeBtn.addEventListener('click',() =>{
//    get encoded msg from input field 
 const encodedMessage = document.querySelector('#encodedInput').value;
// Translate the msg 
const decodedMessage = translateNumbers(reverseWords(encodedMessage));
console.log(decodedMessage);
const output = document.querySelector('#decodedOutput');
output.textContent = decodedMessage;
  });
