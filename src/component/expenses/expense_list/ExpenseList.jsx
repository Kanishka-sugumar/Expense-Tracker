import React from 'react';
import ExpenseItem from '../expense_item/ExpenseItem';
import './ExpensesList.css';

const ExpenseList = (props) => {
    const {expenses =[]}=props;

    if(expenses.length===0){
        return <h3>No expenses found</h3>
    }
    return ( 
        <div className='expenses'>
        <div className='expense-list'>
            {
                expenses.map((each_expense)=>(
                    <ExpenseItem
                    key={each_expense.id}
                    title={each_expense.title}
                    date={each_expense.date}
                    amount={each_expense.amount}
                    />
                    ))
            }
        </div></div>
     );
}
 
export default ExpenseList;