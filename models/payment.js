const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   order_id:{
       type:String
   },
   txn_id:{
       type:Number
   },
   customer_id:{
       type:String
   },
   txnAmount:{
       type:String
   },
   currency:{
       type:String
   },
   txnDate:{
       type:Date
   },
   respMsg:{
       type:String
   },
   status:{
    type:String
   },
   paymentMode:{
       type:String
   },
   gatewayName:{
       type:String
   },
   bankTxn_id:{
       type:String
   },
   bankname:{
       type:String
   },
   checkSumhash:{
       type:String
   }
})

const Payment = mongoose.model('payment' , paymentSchema)
module.exports = Payment