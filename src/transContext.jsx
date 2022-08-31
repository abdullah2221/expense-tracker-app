import { createContext, useReducer } from "react"
import TransReducer from "./transReducer"
const initailTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: 500, desc: "Mobile" },
    { amount: 233, desc: "Book" },
    { amount: 100, desc: "IPHONE" },

]
export const TransactionContext = createContext(initailTransactions)

export const TransactionProvider = (({children }) => {
    let [state, dispatch] = useReducer(TransReducer, initailTransactions)
    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })

    }
    return(
        <TransactionContext.Provider value={
          {  transactions:state,
            addTransaction
        }

        }>
            {children}
        </TransactionContext.Provider>
    )
})
