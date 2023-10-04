import React from "react";

export const TransactionHistory = ({ transactions, onDelete }) => {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul className="transactions">
        {transactions.map((data) => (
          <li key={data.id}>
            {data.name}: ${data.amount}
            <button onClick={() => onDelete(data.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
