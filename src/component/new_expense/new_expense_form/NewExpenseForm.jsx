import React,{useState} from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const{save} =props;
    const[title,setTitle]=useState(''); //it must a child of the component,should not be used anywhere
    const[amount,setAmount]=useState('');
    const[date,setDate]=useState('');
    // let title=null;
    // let amount=null;
    // let date=null;

    const onTtileChangeHandler =(event)=>{
        setTitle(event.target.value);
        // title=event.target.value;
    }
    const onAmountChangeHandler =(event)=>{
        setAmount(event.target.value);
        // amount=event.target.value;
    }
    const onDateChangeHandler =(event)=>{
        setDate(event.target.value);
        // date=event.target.value;
    }
    
    const onFormSubmitHandler =(event)=>{
        event.preventDefault();
        const new_expense={
            title,
            amount,
            date:new Date(date)
        }
        save(new_expense);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return ( 
        <form onSubmit={onFormSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor='expense_title'>Title</label>
                        <input 
                            type="text"
                            name="title"
                            value={title}
                            onChange={onTtileChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor='expemse_amount'>Amount</label>
                        <input 
                            type="number" 
                            id="expenses_amount" 
                            min="0"
                            max="10000"
                            name="amount"
                            value={amount}
                            onChange={onAmountChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor='expense_date'>Date</label>
                        <input 
                            type="date"
                            id="expense_date"
                            name="date"
                            value={date}
                            onChange={onDateChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button>Cancel</button>
                    <button>Add Expenses</button>
                </div>
            </form>
     );
}
 
export default NewExpenseForm;