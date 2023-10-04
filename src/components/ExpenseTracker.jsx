import React, { useState, useEffect, useCallback } from "react";
import { Expense } from "./Expense";
import { TransactionHistory } from "./TransactionHistory";
import { TransactionForm } from "./TransactionForm";

function ExpenseTracker() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const saveState = useCallback(() => {
    localStorage.setItem("expenseTrackerState", JSON.stringify(transactions));
  }, [transactions]);

  const calculateExpenses = useCallback(() => {
    let income = 0,
      expense = 0;
    transactions.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
      } else if (data.type === "expense") {
        expense += data.amount;
      }
    });

    setIncome(income);
    setExpense(expense);
  }, [transactions]);

  const handleAddNewTransaction = (item) => {
    let newTransactions = [...transactions, item];
    setTransactions(newTransactions);
  };

  const handleDelete = (id) => {
    const newTransactions = transactions.filter((item) => item.id !== id);
    setTransactions(newTransactions);
  };

  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem("expenseTrackerState"));
    if (localState) {
      setTransactions(localState);
    }
  }, []);

  useEffect(() => {
    calculateExpenses();
    saveState();
  }, [transactions, calculateExpenses, saveState]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Expense income={income} expense={expense} />
      <TransactionHistory transactions={transactions} onDelete={handleDelete} />
      <TransactionForm onNewTransaction={handleAddNewTransaction} />
    </div>
  );
}

export default ExpenseTracker;
