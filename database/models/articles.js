const mongoose = require('mongoose');
///[@.]/g
const Schema  = mongoose.Schema;

const loginSchema = new Schema({
    firstName : {
      type : String , 
      requied : true , 

    },
   lastName: {
      type: String,
      requied: true,

   },
   email:{
      type : String , 
      required :true ,
      uniquie : true , 

   }, 
   address : {
      type : String , 
      required : true 
   }
    
})