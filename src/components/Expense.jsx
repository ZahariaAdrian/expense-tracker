import React from "react";

export const Expense = ({ income, expense }) => {
  return (
    <div>
      <div>
        <h2 className="your-balance">Your Balance</h2>
        <div className="balance-val">${income - expense}</div>
      </div>
      <div className="row row-expense">
        <div className="col col-income">
          <h2>Income</h2>
          <div className="income-text">${income}</div>
        </div>
        <div className="col col-expense">
          <h2>Expense</h2>
          <div className="expense-text">${expense}</div>
        </div>
      </div>
    </div>
  );
};
