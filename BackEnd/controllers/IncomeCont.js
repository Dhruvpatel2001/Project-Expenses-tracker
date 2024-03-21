const IncomeSchema = require("../models/IncomeModel")
const { param } = require("../routes/transactions")


exports.addIncome = async  (req,res) => {
    const{title, amount, category, description, date} =  req.body

    const income = IncomeSchema({
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
        res.status(200).json({message: 'Income has been added'})
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }

    console.log(income)
}

exports.getIncome = async  (req,res) => {

    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }

}

exports.deleteIncome = async  (req,res) => {
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
      .then((income) =>{
        res.status(200).json({message: 'Income Deleted'})
      })
      .catch((err) =>{
        res.status(500).json({message: 'server error'})
    })
}