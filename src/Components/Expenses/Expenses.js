import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layouts';
import { useGlobalContext } from '../../Context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
  const {addIncome , expenses ,getExpense, deleteExpense, totalExpense} = useGlobalContext()

  useEffect(() =>{
    getExpense()
  },[])

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className='total-Expense'>Total Expense:<span>${totalExpense()}</span></h2>
        <div className='Expense-content'>
            <div className='form-container'>
                <ExpenseForm />
            </div>
                <div className='Expense'>
                  {expenses.map((income) => {
                    const {_id, title, amount, date, category, description, type} = income;
                    return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                  })}

                </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
display: flex;
overflow: auto;
.total-Expense{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
}
.Expense-content{
    display: flex;
    gap: 2rem;
    .Expense{
        flex: 1;
    }
}


`;

export default Expenses 