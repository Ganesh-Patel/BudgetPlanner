import React, { useState, useEffect } from 'react';
import style from './main.module.css';

function Main() {
  const [budget, setBudget] = useState(1000); // Initial total budget
  const [detail, setDetail] = useState('');
  const [amount, setAmount] = useState('');
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  const calculateTotalSpent = () => {
    return expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
  };

  const addExpense = () => {
    if (detail && amount) {
      const newExpense = { detail, amount: parseFloat(amount) };
      expenses.push(newExpense);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      setDetail('');
      setAmount('');
      // Force re-render
      setBudget(budget => budget);
    }
  };

  const deleteExpense = (index) => {
    expenses = expenses.filter((_, i) => i !== index);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    // Force re-render
    setBudget(budget => budget);
  };

  const totalSpent = calculateTotalSpent();
  const remainingBudget = budget - totalSpent;

  return (
    <div className={style.mainSection}>
      <h1 style={{ textAlign: 'center' }}>My Budget Planner</h1>
      <div className={style.budgetInfo}>
        <div>
          <h2>Total Budget: ₹ {budget}</h2>
        </div>
        <div>
          <h2>Remaining Budget: ₹ {remainingBudget}</h2>
        </div>
        <div>
          <h2>Spent So Far: ₹ {totalSpent}</h2>
        </div>

      </div>
      <div className={style.expenseList}>
        {expenses.map((expense, index) => (
          <div key={index} className={style.expenseCard}>
            <p className={style.expenseDetail}>{expense.detail}</p>
            <p className={style.expenseAmount}>₹ {expense.amount}</p>
            <button className={style.deleteButton} onClick={() => deleteExpense(index)}>Delete</button>
            
          </div>
        ))}
      </div>
      <div className={style.inputSection}>
        <input
          type="text"
          placeholder="Detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className={style.saveButton} onClick={addExpense}>Save</button>
      </div>
    </div>
  );
}

export default Main;
