import React, { useState } from "react";
import ExpenseCylinderYear from "./ExpenseCylinderYear";

const ExpenseBar = () => {
    const arrays = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        [9, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 5],
    ];

    const [year, setYear] = useState(arrays[0]);

    const onYearChangeHandler = (event) => {
        console.log(event.target.value);
        setYear(arrays[parseInt(event.target.value)-2019]);

    }
    
    
    return (
        <div>
            <div>
                <p>Filter By Year</p>
                <select onChange={onYearChangeHandler}>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
            <div>
                <ExpenseCylinderYear year={ year}/>
            </div>
        </div>
    );
}

export default ExpenseBar;