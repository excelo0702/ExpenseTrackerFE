import React from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import '../styles/AllExpense.css';
import ExpenseForm from "./ExpenseForm";
import ExpenseBar from "./ExpenseBar";

const AllExpense = () => {

    const onAddExpense = (expenseData) => {
        console.log(expenseData);
    }

    return (<div>
        <Card className="">
            <ExpenseForm className="all-expense-form" onAddExpense={ onAddExpense}/>
            </Card>
        <Card className="all-expense">
        <Card className="">
            <ExpenseBar/>
        </Card>
        
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem/>
    </Card></div>);
}

export default AllExpense;