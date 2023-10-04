import React, { useState } from "react";
import { uniqueId } from "../utils";

export const TransactionForm = ({ onNewTransaction }) => {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const addTransaction = (type, e) => {
    e.preventDefault();
    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amountValue),
      type: type,
    };
    onNewTransaction(data);
    setAmountValue("");
    setNameValue("");
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form className="transaction-form">
        <label>
          Name
          <div>
            <input
              type="text"
              onChange={(e) => setNameValue(e.target.value)}
              value={nameValue}
            />
          </div>
        </label>
        <label>
          Amount
          <div>
            <input
              type="number"
              onChange={(e) => setAmountValue(e.target.value)}
              value={amountValue}
            />
          </div>
        </label>
        <div>
          <button
            className="income-btn"
            onClick={(e) => addTransaction("income", e)}
          >
            Add Income
          </button>
          <button
            className="expense-btn"
            onClick={(e) => addTransaction("expense", e)}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};
