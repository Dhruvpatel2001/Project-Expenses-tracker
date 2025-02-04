const ExpenseSchema = require("../models/ExpenseModel")
const { param } = require("../routes/transactions")


exports.addExpense = async  (req,res) => {
    const{title, amount, category, description, date} =  req.body

    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title|| !category || !description || !date){
            return res.status(400).json({message: "Required to fill all the fields"})
        }
        if(amount <= 0|| !amount === 'number'){
            return res.status(400).json({message: "Numbers should be positive"})
        }
        await income.save()
        res.status(200).json({message: 'Expense has been added'})
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }

    console.log(income)
}

exports.getExpense = async  (req,res) => {

    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }

}

exports.deleteExpense = async  (req,res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
      .then((income) =>{
        res.status(200).json({message: 'Expense Deleted'})
      })
      .catch((err) =>{
        res.status(500).json({message: 'server error'})
    })
}