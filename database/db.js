const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ujjwal:btcROmtkt3U4eYvj@cluster0.fupik.mongodb.net/E_content?retryWrites=true&w=majority',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  }).then((db)=>{
      console.log("Succesfully connected to mongodb server");
  },(err)=>console.log(err));