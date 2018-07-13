const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://aga:Rabbitale93@cluster0-t3uli.mongodb.net/devf?retryWrites=true',
    {useNewUrlParser:true}
);

const Note = mongoose.model('Note', {
    text:String,
    color:String
});

module.exports = Note;
