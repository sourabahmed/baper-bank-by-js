//deposit function
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    
    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositAmountText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const currentAmount = document.getElementById('current-amount');
    const currentAmountText = currentAmount.innerText;
    const totalCurrentAmount = parseFloat(currentAmountText);
    
    const totalDeposit = depositAmount + previousDepositAmount;
    previousDeposit.innerText = totalDeposit;
    const finalAmount = totalCurrentAmount + totalDeposit;
    currentAmount.innerText = finalAmount;
})
//withdrow Function
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    withdrawInput.value = '';

    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const currentAmount = document.getElementById('current-amount');
    const currentAmountText = currentAmount.innerText;
    const totalCurrentAmount = parseFloat(currentAmountText);

    const totalWithdraw = withdrawAmount + previousWithdrawAmount;
    previousWithdraw.innerText = totalWithdraw;
    const finalAmount = totalCurrentAmount - totalWithdraw;
    currentAmount.innerText = finalAmount;

})