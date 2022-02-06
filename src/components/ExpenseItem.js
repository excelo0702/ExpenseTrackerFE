import React from "react";
import Card from "../ui/Card";
import ExpenseItemDate from "./ExpenseItemDate";
import '../styles/ExpenseItem.css'

const ExpenseItem = () => {
    const date = new Date("December 17, 1995");
    return <Card className="expense-item">
        <div className="expense-date-title">
            <ExpenseItemDate date={date}/>
            <div className="expense-title">Ration</div>
        </div>
        <Card className="expense-item-price">
            <p>700.00 Rs</p>
        </Card>
    </Card>;
}

export default ExpenseItem;