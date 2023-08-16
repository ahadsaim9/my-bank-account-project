// ----------------deposit-----------------
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step 1:
  const depositInputField = document.getElementById("deposit-input-field");

  const newDepositAmountString = depositInputField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  if (newDepositAmountString == "") {
    alert("Please enter your amount.");
    return;
  }
  if (newDepositAmountString < 0) {
    alert("Please enter a positive amount.");
    return;
  }
  if (typeof newDepositAmountString == "string") {
    alert("Please enter the number.");
    return;
  }
  // step 2:
  const depositTotal = document.getElementById("deposit-total");

  const previousDepositTotalString = depositTotal.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //   step 3:
  const depositTotalAmount = previousDepositTotal + newDepositAmount;
  depositTotal.innerText = depositTotalAmount;

  // step 4:
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalString = balanceTotal.innerText;
  const previousTotal = parseFloat(balanceTotalString);
  const balanceTotalAmountIs = previousTotal + newDepositAmount;
  balanceTotal.innerText = balanceTotalAmountIs;
  // step 6:
  depositInputField.value = "";
});
