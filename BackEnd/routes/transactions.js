const router = require('express').Router()
const {addIncome, getIncome, deleteIncome} = require('../controllers/IncomeCont');
const { addExpense,getExpense, deleteExpense } = require('../controllers/expense');



router.post('/add-income', addIncome)
    .get('/get-incomes', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router