import React from "react";
import '../styles/ExpenseItemDate.css';

const ExpenseItemDate = (props) => {
    const month = (props.date.toLocaleString('en-US', { month: 'long' })).slice(0,3);
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return <div className="expense-item-date">
      <div>
        <span>{month}</span>
        <span>{day}</span>
      </div>
        <div>{year}</div>
    </div>;
}

export default ExpenseItemDate;