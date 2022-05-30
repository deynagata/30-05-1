const mongoose = require ('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://dey:peixe123@cluster0.mo2rqhx.mongodb.net/test')
   
}
 
module.exports = conn    