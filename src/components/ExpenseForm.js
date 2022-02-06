import React, { useState } from "react";
import Button from "../ui/Button";
import InputTextField from "../ui/InputTextField";
import "../styles/ExpenseForm.css";

const ExpenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    
    const onChangeTitleHandler = (event) => {
        setTitle(event.target.value);
    }

    const onChangeAmountHandler = (event) => {
        setAmount(event.target.value);
    }

    const onChangeDateHandler = (event) => {
        setDate(event.target.value);
    }
    const onSaveExpenseHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: date
        };
        props.onAddExpense(expenseData);
    }
    

    const classes = props.className + " expense-form";
    return <form className={classes} onSubmit={onSaveExpenseHandler}>
        <div className="expense-div-title">
            <label>Title</label>
            <input type="text" value={title} onChange={onChangeTitleHandler}/>
            <label>Amount</label>
            <input type="number" value={amount} onChange={onChangeAmountHandler}/>
        </div>
        <div>
            <label>Date</label>
            <input type="date" value={date} onChange={onChangeDateHandler}/>
            <Button>Add Expense</Button>
        </div>
    </form>
}

export default ExpenseForm;