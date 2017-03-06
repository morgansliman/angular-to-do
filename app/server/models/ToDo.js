const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ToDoSchema = new Schema(
	{
		todo:       { type: String, required: true },
		completeBy: { type: Date, required: true },
		completed:  { type: Boolean, default: false }
	}
);

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;