import React, { useContext } from 'react';
import style from './main.module.css';
import { MyContext } from '../MyContext';

function Main() {
  const { 
    budget, 
    detail, 
    amount, 
    setDetail, 
    setAmount, 
    expenses, 
    addExpense, 
    deleteExpense, 
    totalSpent, 
    remainingBudget 
  } = useContext(MyContext);

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
