import React,{ useState } from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";


const ExpenseItem =(props) =>{
    console.log(props);
    const{
        date,
        title,
        amount
    }=props;
    
    // const onClick=()=>{
    //     setModifiedTitle('updated')
    //     console.log(modified_title,props)
    // }
    //let modified_title=title;
 return(
    <div className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
           <h2>{title}</h2>
           <div className="expense-item__price">Rs.{amount}</div>
        </div>
        {/* <button onClick={onClickHandler}
    >Update
    </button> */}
    </div>
 )
    }
export default ExpenseItem;  
  

//giving global access to the ExpenseItem(function)-we can rename the Expense and can use to import and component(that must be same)
// useState- it is the main hook(to update the particular value in the state)