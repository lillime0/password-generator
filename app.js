const result = document.querySelector("#result");
const length = document.querySelector("#length");
const passLength = document.querySelector("#password-length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const form = document.querySelector(".form");
const clipboard = document.querySelector(".copy-icon");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = Array.from("!@#$%^&*(){}[]=<>+/.,:;~");
const charCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseLetters = charCodes.map(c => String.fromCharCode(c));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

length.addEventListener("input", e => {
  passLength.textContent = e.target.value;
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const len = parseInt(length.value);
  const hasLowercase = lowercase.checked;
  const hasUppercase = uppercase.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;
  result.textContent = generatePassword(
    len,
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols
  );
});
const generatePassword = (
  len,
  hasLowercase,
  hasUppercase,
  hasNumbers,
  hasSymbols
) => {
  const all = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? lowercaseLetters : []),
    ...(hasUppercase ? uppercaseLetters : [])
  ];
  let generatedPassword = "";
  if (all.length === 0) return "";

  for (let i = 0; i <= len; i++) {
    const randomIndex = Math.floor(Math.random() * all.length);
    generatedPassword += all[randomIndex];
  }
  return generatedPassword;
};
clipboard.addEventListener("click", () => {
  // copyText(result.textContent);
  navigator.clipboard.writeText(result.textContent);
});
// const copyText = text => {
//   navigator.clipboard.writeText(text);
// };
