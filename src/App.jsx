import React, { useState,useEffect } from 'react';
import './App.css'
import ExpenseList from './component/expenses/expense_list/ExpenseList'
import NewExpense from './component/new_expense/NewExpenses'
import ExpenseItem from './component/expenses/expense_item/ExpenseItem';


const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New Mobile',
    amount: 799.49, 
    date: new Date(2020, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
const [expenses,setExpenses]=useState(DUMMY_DATA)
const onNewExpenseSubmit=(new_expenses)=>{
  fetch('http://localhost:3000/expense/').then((res)=>{
    resizeBy.json().then((json)=>{
      console.log(json)
  })
  })
    // console.log(new_expenses)
    setExpenses((previous_expenses)=>[new_expenses,...previous_expenses]); //previous-call the values which are stored already
    DUMMY_DATA.push(new_expenses);
}

useEffect(()=>{
  fetch('http://localhost:3000/expense/').then((res)=>{
    resizeBy.json().then((json)=>{
      console.log(json)
  })
  })
},[])

  return (
    <div className="App">
      <NewExpense onNewExpenseSave={onNewExpenseSubmit}/>
      <ExpenseList expenses={DUMMY_DATA}/>
      {/* {
        DUMMY_DATA.map((item) =>{
          return(
            <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            />
          )
        })
      } */}
    </div>
  )
}

export default App
