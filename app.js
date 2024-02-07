document.addEventListener('DOMContentLoaded', function () {
    const incomeInput = document.getElementById('income');
    const expenseInput = document.getElementById('expense');
    const balanceDisplay = document.getElementById('balance');
    const historyList = document.getElementById('historyList');

    let balance = 0;

    function updateBalance() {
        const income = parseFloat(incomeInput.value) || 0;
        const expense = parseFloat(expenseInput.value) || 0;

        if (income > 0) {
            balance += income;
            addToHistory(income, 'green');
        } else if (expense > 0) {
            balance -= expense;
            addToHistory(expense, 'red');
        }

        balanceDisplay.style.opacity = 0;

        setTimeout(() => {
            balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
            balanceDisplay.style.color = balance < 0 ? 'red' : '#4CAF50';
            balanceDisplay.style.opacity = 1;
        }, 350); 

        incomeInput.value = '';
        expenseInput.value = '';
    }

    function addToHistory(amount, color) {
        const listItem = document.createElement('li');
        listItem.textContent = `$${amount.toFixed(2)}`;
        listItem.style.color = color;
        historyList.appendChild(listItem);
    }

    incomeInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            updateBalance();
        }
    });

    expenseInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            updateBalance();
        }
    });
});
