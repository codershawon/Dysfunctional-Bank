/* -----------------------Withdraw section-------------------------------- */
document.getElementById("btnWithdraw").addEventListener("click", function () {
    const withdraw_Field = document.getElementById("withdrawAmount");
    const new_withdraw_Amount = parseFloat(withdraw_Field.value);
    const withdraw_total_element = document.getElementById("withdrawTotal");
    const previous_withdraw_Total = parseFloat(withdraw_total_element.innerText);
    const current_withdraw_total = new_withdraw_Amount + previous_withdraw_Total;
    withdraw_total_element.innerText = parseFloat(current_withdraw_total);
  
    withdraw_Field.value = "";
  
    /* ----------------Total balance after withdraw------------------------------- */
    const balanceTotalElement = document.getElementById("balanceTotal");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentTotalBalance = previousBalanceTotal - current_withdraw_total;
    balanceTotalElement.innerText = currentTotalBalance;
    if(currentTotalBalance<1){
        alert("You don't have enough balance to withdraw. Please check your account!")
    }
  });