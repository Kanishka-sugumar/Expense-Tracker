import React from 'react';
import NewExpenseForm from './new_expense_form/NewExpenseForm';
import './NewExpenses.css';

const NewExpense = (props) => {
    const {onNewExpenseSave}=props
    const onAddExpense =(new_expenses)=>{
        const modified_expense={
            ...new_expenses,  //destrucing the already existing values and adding to it.
            id:Math.random()*10
        }
        onNewExpenseSave(modified_expense)
        // console.log('newExpense',modified_expense)
    }
    return ( 
        <div className="new-expense">
            <NewExpenseForm save={onAddExpense}/>
        </div>
            
     );
}
 
export default NewExpense;