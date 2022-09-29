const mongoose = require("mongoose");
//For the ticet number we added mongoose-sequence package. MongoDB object id's too long and complex numbers. We cannot keep them as ticket numbers.

const AutoIncrement = require('mongoose-sequence')(mongoose)


const noteSchema = new mongoose.Schema(
{
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
},
{
    timestamps: true //mongodb is giving us Created At and Updated At timestamps just by set this option for schema
}
);

//Creation of ticket field with autoIncrement ID
noteSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongoose.model("Note", noteSchema);
