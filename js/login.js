//Step 1: add click event handler  with the submit button.
document.getElementById("submit-btn").addEventListener("click", function () {
  //Step 2:get the email address inside the email input field.
  const emailField = document.getElementById("login-email");
  const emailFieldValue = emailField.value;

  //Step 3:get the password inside the password input field.
  const passwordField = document.getElementById("login-password");
  const passwordFieldValue = passwordField.value;
  //Step 4: verify email and password
  if (
    emailFieldValue === "ahadsaim9@gmail.com" &&
    (passwordFieldValue === "04995191asm" || passwordFieldValue === "123456789")
  ) {
    return (window.location.href = "bank.html");
  } else {
    alert("Bank ta ki apnar bapar...? je chailey dhukte parben.");
  }
});
