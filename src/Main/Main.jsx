import React, { useContext, useState } from 'react';
import style from './main.module.css';
import { MyContext } from '../MyContext';

function Main() {
  const {
    budget,
    setBudget,
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

  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBudgetChange = () => {
    setBudget(newBudget);
    setIsEditingBudget(false);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.amount.toString().includes(searchQuery)
  );

  return (
    <div className={style.mainSection}>
      <h1 style={{ textAlign: 'center' }}>My Budget Planner</h1>
      <div className={style.budgetInfo}>
        <div>
          {isEditingBudget ? (
            <>
              <input
                type="number"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                className="budgetInput"
              />
              <button onClick={handleBudgetChange} className={style.saveBtn}>Save</button>
            </>
          ) : (
            <>
              <h2>Total Budget: ₹ {budget}</h2>
              <button onClick={() => setIsEditingBudget(true)} className={style.editButton}>Edit</button>
            </>
          )}

        </div>
        <div>
          <h2>Remaining Budget: ₹ {remainingBudget}</h2>
        </div>
        <div>
          <h2>Spent So Far: ₹ {totalSpent}</h2>
        </div>
      </div>

      {/* Search Section */}
      <h1>Search Expense</h1>
      <div className={style.searchSection}>
        <input
          type="text"
          placeholder="Search by detail or amount"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={style.searchInput}
        />
      </div>

      {/* Expense List Section */}
      <div className={style.expenseList}>
        {filteredExpenses.map((expense, index) => (
          <div key={index} className={style.expenseCard}>
            <p className={style.expenseDetail}>{expense.detail}</p>
            <p className={style.expenseAmount}>₹ {expense.amount}</p>
            <button className={style.deleteButton} onClick={() => deleteExpense(index)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Add Expense Section */}
      <h1>Add Expense</h1>
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
        <div className={style.saveButton}>
         <button  onClick={addExpense}>Save</button>
        </div>
       
      </div>
    </div>
  );
}

export default Main;
