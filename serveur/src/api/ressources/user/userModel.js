import mongoose from 'mongoose'
const { Schema } = mongoose;
import mongoosePaginate from "mongoose-paginate"

const userSchema = new Schema ({
    firstName: {
        type:String,
        required: true
      },
    
      lastName: {
        type:String,
        required:true
      },
    
      email: {
        type: String,
        required: true,
        unique:true
      },
    
      password : {
        type:String,
        required:true
      },
    });


userSchema.plugin(mongoosePaginate);
export default mongoose.model('User', userSchema);