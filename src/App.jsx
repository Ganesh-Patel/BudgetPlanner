import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { MyContext } from './MyContext';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [budget, setBudget] = useState(1000); // Initial total budget
  const [detail, setDetail] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem('expenses')) || [];
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const addExpense = () => {
    if (detail && amount) {
      const newExpense = { detail, amount: parseFloat(amount) };
      setExpenses(prevExpenses => [...prevExpenses, newExpense]);
      setDetail('');
      setAmount('');
    }
  };

  const deleteExpense = (index) => {
    setExpenses(prevExpenses => prevExpenses.filter((_, i) => i !== index));
  };

  const calculateTotalSpent = () => {
    return expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
  };

  const totalSpent = calculateTotalSpent();
  const remainingBudget = budget - totalSpent;

  return (
    <MyContext.Provider value={{
      isDarkMode, 
      toggleTheme, 
      budget, 
      setBudget, 
      detail, 
      setDetail, 
      amount, 
      setAmount, 
      expenses, 
      addExpense, 
      deleteExpense, 
      totalSpent, 
      remainingBudget
    }}>
      <Header />
      <Main />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
