import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { TransactionContext } from './transContext'

export default function Child() {
    const { transactions, addTransaction } = useContext(TransactionContext)
    // console.log(transactions)
    const [newDescription, setNewDescription] = useState("")
    const [newAmount, setNewAmount] = useState(0)

    const handleAddition = (e) => {
        e.preventDefault()
        console.log(newDescription, newAmount)
        if(Number(newAmount)=== 0){
         alert("Please ReEnter an amount.")
             return false;
        }
        addTransaction({
            amount:  Number(newAmount),
            desc: newDescription
        })
        setNewAmount(0)
        setNewDescription("")
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income
    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
            expense += transactions[i].amount
        }
        return expense
    }
    return (

        <div className='container1 '>

            <h1 className="text-center">Expense Trcker</h1>
            <h3>Your Balance <br />{getIncome()+ getExpense()} </h3>

            <div className="expense-center">
                <h5 className=''>Income <br />${getIncome()} </h5>
                <h5>Expense <br /> ${getExpense()} </h5>
            </div>
            <h3>History</h3>
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return <li key={ind}>
                        <span>{transObj.desc}</span>
                        <span> {transObj.amount}</span>
                    </li>

                })}
            </ul>
            <hr />
            <h3>Add new Transaction</h3>
            <form onSubmit={handleAddition}>
                <div className="mb-1">
                    <label htmlFor="exampleInputEmail1" className="form-label">Text</label>
                    <input type="text" className="form-control" value={newDescription} required id="exampleInputEmail1" onChange={(e) => { setNewDescription(e.target.value) }} />

                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
                    <input type="number" className="form-control" value={newAmount} required id="exampleInputPassword1" onChange={(e) => { setNewAmount(e.target.value) }} />
                </div>

                <input type="submit" value="Add Transaction " className='btn btn-info w-100 my-2' />
            </form>
            <hr />
        </div>


    )
}
