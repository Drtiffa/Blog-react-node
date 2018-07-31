import mongoose from 'mongoose'
import Paginate from 'mongoose-paginate'

const { Schema } = mongoose;
const articleModel = new Schema({
    titre : { 
        type : String, require : true 
    },

    date : {
        type: Date, 
    },

    text : {
        type : String, required : true
    },

    isPublished : 
    Boolean,

});

articleModel.plugin(Paginate);
export default mongoose.model('Article', articleModel);
  