//Add event listener to the deposit button
/* ------------------Deposit section----------------------------------- */
document.getElementById("btnDeposit").addEventListener("click", function () {
  const deposit_Field = document.getElementById("depositAmount");
  const new_deposit_Amount = parseFloat(deposit_Field.value);
  const deposit_total_element = document.getElementById("depositTotal");
  const previous_deposit_Total = parseFloat(deposit_total_element.innerText);
  const current_deposit_total = new_deposit_Amount + previous_deposit_Total;
  deposit_total_element.innerText = parseFloat(current_deposit_total);

  deposit_Field.value = "";

  /* ----------------Total balance after deposit------------------------------- */
  const balanceTotalElement = document.getElementById("balanceTotal");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
  const currentTotalBalance = previousBalanceTotal + current_deposit_total;
  balanceTotalElement.innerText = currentTotalBalance;
});

