let errorMsg = document.querySelectorAll(".error")
let password = document.querySelector("#password");
let confrim = document.querySelector("#confrim");
let phoneNum = document.querySelector("#phone");

phoneNum.addEventListener("input", function () {
  let hasNonDigit = /^\d+$/.test(this.value); // Matches only digits
  errorMsg[1].style.display = hasNonDigit ? 'none' : 'block';
});

password.addEventListener("input", function () {
  let lengthDetected = this.value.length < 8;
  errorMsg[2].style.display = lengthDetected ? 'block': 'none'
})


passwordconfirm.addEventListener("input", function () {
  let passwordCheck = password.value !== this.value;
  errorMsg[3].style.display = passwordCheck ? 'block':'none'
})