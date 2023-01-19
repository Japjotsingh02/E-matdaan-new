const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb+srv://sjapjot07:sunjap137@cluster0.hc0ilq6.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})