// -----------------Withdraw-------------------
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step 1: new withdraw amount
  const withdrawInputField = document.getElementById("withdraw-input-field");
  const withdrawInputFieldString = withdrawInputField.value;
  const newWithdrawAmount = parseFloat(withdrawInputFieldString);
  // step 2: Total withdraw
  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalString = withdrawTotal.innerText;
  const previousWithdrawTotalAmount = parseFloat(withdrawTotalString);

  // step 3:
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalString = balanceTotal.innerText;
  const previousTotal = parseFloat(balanceTotalString);

  // step 4:
  if (newWithdrawAmount > previousTotal) {
    alert("Insufficient Balance");
    withdrawInputField.value = "";
    return;
  }
  // step 5:
  const withdrawAmountBalance = previousWithdrawTotalAmount + newWithdrawAmount;
  withdrawTotal.innerText = withdrawAmountBalance;
  //  step 6:

  const balanceTotalAmountIs = previousTotal - newWithdrawAmount;
  balanceTotal.innerText = balanceTotalAmountIs;
  //   step 7 :
  withdrawInputField.value = "";

  // --------------------Balance----------------
});
